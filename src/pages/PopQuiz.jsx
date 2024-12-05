import PageLayout from '../components/layout/PageLayout';
import Quiz from '../components/common/Quiz';

const PopQuiz = () => {
  const quizData = {
    category: 'pop',
    title: 'Pop Culture',
    subtitle: '60 million households watched Tyson-Paul fight, Netflix says',
    imageUrl: '/paul_tyson.png',
    imageCaption: 'Youtuber turned boxer Jake Paul and Mike Tyson',
    articleText: [
      "More than 60 million households watched the much-hyped boxing match between 58-year-old retired boxing legend Mike Tyson and the far-younger Jake Paul on Friday night, Netflix said.",
      "The match between Tyson, former heavyweight champion of the world, and Paul, a 27-year-old social media star-turned-boxer, ended with no knockdowns and a win by unanimous decision for Paul.",
      "The event was plagued by reports of problems with the video quality or interruptions during the undercard matches, but reports of issues tracked by website downdetector.com had dropped by the time of the main event at around 11 p.m. local time in Texas.",
      "\"The boxing mega-event dominated social media, shattered records, and even had our buffering systems on the ropes,\" the company wrote on X Saturday.",
      "There were around 65 million concurrent streams at the peak of the Tyson-Paul fight, which was held at AT&T Stadium in Arlington, Texas, Netflix said said in a statement Saturday."
    ],
    question: "What was the peak viewership for the Tyson-Paul fight?",
    answers: [
      "60 Million",
      "65 Million",
      "50 Million",
      "The streams interruptions prevented a count"
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
