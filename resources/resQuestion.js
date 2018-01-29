export const response = '[{"subject":"science","chapter":"11. Bankruptcy","type":1,"question":"What is Matter?","options":["This","That","That2","That3"],"answer":"This"},{"subject":"science","chapter":"11. Bankruptcy","type":1,"question":"What is Matter 17?","options":["This","That","That2"],"answer":"This"}]';

export const prepareQuestions = function(props){
    console.log("Wel====mdi1n2d");
    console.log(props);
    props.unsetQuestion();

    console.log("Wel====mdi1n2d==1");
    console.log(props);

    var json = JSON.parse(response);
    var getQuestion = json[Math.floor(Math.random()*json.length)];
    console.log(getQuestion);
    props.setQuestion(getQuestion);

    console.log("Wel====mdi1n2d==2");
    console.log(props);
    
    return props;
};

//{"subject":"science","chapter":"12. No","type":2,"question":"What is?","answer":["Yes","Statement","Brushless"]}