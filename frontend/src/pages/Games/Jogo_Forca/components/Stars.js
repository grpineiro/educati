

const stars = ({ wrongLetters, selectedWord }) => {
    let stars = 0;

    if (selectedWord.length === 2 && wrongLetters.length >= 2){
        stars = 1;
    } else { if(selectedWord.length === 4 && wrongLetters.length >= 4){
        stars = 1;
    }else{
        stars = selectedWord.length - wrongLetters.length;
    }}
    
    return stars;

  };
  
  export default stars;