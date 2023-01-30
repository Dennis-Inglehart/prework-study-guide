var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];
var letsStudy = randomTopic; //this was not in the prework instructions

function listTopics() {
    for(var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}

function selectTopic() { //the prework instructions used randomTopic instead of letsStudy
    if (letsStudy === 'HTML') {
        console.log("Let's study HTML!")
    } else if (letsStudy === 'CSS') {
        console.log("Let's study CSS!")
    } else if (letsStudy === 'Git') {
        console.log("Let's study Git!")
    } else if (letsStudy === 'JavaScript') {
        console.log("Let's study JavaScript!")
    } else {
        console.log("No study guide exists for a topic spelled exactly like that.")
    }
}

console.log('Here are the topics we learned through prework:')
listTopics()
console.log('Which topic should we study first?')
selectTopic()