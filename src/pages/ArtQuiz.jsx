import PageLayout from '../components/layout/PageLayout';
import Quiz from '../components/common/Quiz';

const PopQuiz = () => {
  const quizData = {
    category: 'art',
    title: 'Art',
    subtitle: 'Hong Kong will display 2,500 panda sculptures to capitalize on a local bear craze',
    imageUrl: '/pandas.png',
    imageCaption: 'Panda sculptures displayed at the Hong Kong International Airport',
    articleText: [
      "(CNN) - Thousands of giant panda sculptures will greet residents and tourists starting Saturday in Hong Kong, where enthusiasm for the bears has grown since two cubs were born in a local theme park.",
      "The 2,500 exhibits were showcased in a launch ceremony of PANDA GO! FEST HK, the city's largest panda-themed exhibition, at Hong Kong's airport on Monday. They will be publicly displayed at the Avenue of Stars in Tsim Sha Tsui, a popular shopping district, this weekend before setting their footprint at three other locations this month.",
      "One designated spot is Ocean Park, home to the twin cubs, their parents and two other pandas gifted by Beijing this year. The design of six of the sculptures, made of recycled rubber barrels and resins among other materials, was inspired by these bears.",
      "The cubs — whose birth in August made their mother Ying Ying the world's oldest first-time panda mom — may meet visitors as early as February.",
      "The displays reflect Hong Kong's use of pandas to boost its economy as the Chinese financial hub works to regain its position as one of Asia's top tourism destinations.",
      "Hong Kong's tourism industry representatives are upbeat about the potential impact of housing six pandas, hoping to boost visitor numbers even though caring for pandas in captivity is expensive. Officials have encouraged businesses to capitalize on the popularity of the bears to seize opportunities in what some lawmakers have dubbed the “panda economy.”"
    ],
    question: "What is the primary purpose of the PANDA GO! FEST HK exhibition in Hong Kong?",
    answers: [
      "To promote awareness about environmental conservation through panda sculptures.",
      "To celebrate the birth of panda cubs at Ocean Park and attract tourists to Hong Kong.",
      "To educate the public about the history of panda gifting between Beijing and Hong Kong.",
      "To raise funds for maintaining pandas in captivity through ticket sales."
    ],
    correctAnswerIndex: 1
  };

  return (
    <PageLayout hideBottomNav={true}>
      <Quiz {...quizData} />
    </PageLayout>
  );
};

export default PopQuiz;
