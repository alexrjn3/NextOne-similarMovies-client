import { pipeline } from "@huggingface/transformers";


const extractorPromiseMiniLM =  pipeline(
    "feature-extraction",
    "Xenova/all-MiniLM-L6-v2",
    {
        dtype: 'q8' // Ensure you're using the quantized model if it's supported
    }
    //0.30 cred?
);

const extractorPromiseMpnet =    pipeline(
    "feature-extraction",
    "Xenova/all-mpnet-base-v2",
    { dtype: 'q8' }
     //0.45 si peste
);


let selected_choice;
let filme_similare = [];
let extractor;


const afisareRezultat = function(cosineSimilarity,movie){
      if (cosineSimilarity > selected_choice.value) {
        console.log(`Found similar movie: ${movie.title}`);
        console.log(`Description: ${movie.overview}`);
        console.log(`Similarity: ${cosineSimilarity}`);
        filme_similare.push({...movie, similarity: cosineSimilarity});
      }
}

const calculCosine = async function(embedding1, movies){
  for (let i = 0; i < movies.length; i++) {
      const raw2 = await extractor(movies[i].overview, { pooling: 'mean', normalize: true });
      const embedding2 = raw2.data;

      // Compute cosine similarity between the original movie and the current movie in the array
      const cosineSimilarity = dotProduct(embedding1, embedding2);
      // If similarity is above the threshold, log the similar movie
      afisareRezultat(cosineSimilarity,movies[i])
    }
}


export async function comparaDescrieri(movie, movies, choice) {
  try{
    //cred ca e mai bine sa scoatem daca apare filmul original la final, decat acum la inceput unde trebuie sa trecem prin tot vectorul movies
    // if (!movie || !movies) {
    //   console.error("One or both sentences are empty.");
    //   return 0;
    // }

    //1. Initialize the feature extraction pipeline with the model
    filme_similare= [];
    selected_choice = choice;
    extractor=0;
    if(selected_choice.name == 'minilm') extractor = await extractorPromiseMiniLM;
    if(selected_choice.name == 'mpnet') extractor = await extractorPromiseMpnet;

    //2. Extract embeddings for the movie overview
    const raw1 = await extractor(movie, { pooling: 'mean', normalize: true });
    const embedding1 = raw1.data;

    //3. Extract embeddings for the movies and compare with movie overview
    await calculCosine(embedding1,movies);
    console.log(filme_similare)
    return filme_similare;
  }catch(err){
    console.log(err)
  }
}

// Function to compute cosine similarity
function dotProduct(a, b) {
  const sum = a.reduce((acc, val, i) => acc + val * b[i], 0);
  const normA = Math.sqrt(a.reduce((acc, val) => acc + val * val, 0));
  const normB = Math.sqrt(b.reduce((acc, val) => acc + val * val, 0));
  return sum / (normA * normB);
}
