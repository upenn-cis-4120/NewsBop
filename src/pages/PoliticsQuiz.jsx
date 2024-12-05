import PageLayout from '../components/layout/PageLayout';
import Quiz from '../components/common/Quiz';

const PoliticsQuiz = () => {
  const quizData = {
    category: 'politics',
    title: 'Global Events',
    subtitle: 'Germany\'s Scholz discusses Ukraine with Russia\'s Putin in first such call in 2 years',
    imageUrl: '/scholz.png',
    imageCaption: 'German Chancellor Olaf Scholz gives a speech during a session on Nov. 13 at the Bundestag (lower house of parliament) in Berlin',
    articleText: [
      "BERLIN — German Chancellor Olaf Scholz spoke Friday with Russian President Vladimir Putin, the Kremlin leader\'s first publicly announced conversation with the sitting head of a major Western power in nearly two years. Scholz urged Putin to be open to negotiations with Ukraine, his office said.",
      "The Kremlin leader responded that any peace deal should acknowledge Russia\'s territorial gains and security demands, including that Kyiv renounce joining NATO.",
      "Government spokesman Steffen Hebestreit said Scholz urged Putin in the hour-long call to withdraw his troops and end the full-scale invasion launched in February 2022. The conflict will reach its 1,000th day on Tuesday, and exiled Russian opposition leaders, including Alexei Navalny\'s widow, Yulia, have set an antiwar rally for Sunday in Berlin.",
      "Washington has been Ukraine\'s biggest military backer, but Trump has repeatedly questioned the amount of aid being given to Ukraine. While Trump has suggested he could settle the war quickly, Ukraine has ruled out giving up any territory to Moscow in return for peace.",
      "Ukrainian President Volodymyr Zelenskyy criticized Scholz's call to Putin, calling it “a Pandora\'s box” and would only serve to make Russia less isolated.",

    ],
    question: "Zelenskyy was in support of Scholz's discussion with Putin",
    answers: [
      "True",
      "False"
    ],
    correctAnswerIndex: 1
  };

  return (
    <PageLayout hideBottomNav={true}>
      <Quiz {...quizData} />
    </PageLayout>
  );
};

export default PoliticsQuiz;
