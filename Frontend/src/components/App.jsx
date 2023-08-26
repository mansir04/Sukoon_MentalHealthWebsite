import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';

import Home from '../pages/Home';
import Help from '../pages/Help';
import Articles from '../pages/Articles';
import Initiatives from '../pages/Initiatives';
import Blogs from '../pages/Blogs';
import Quiz from '../pages/Quiz';
import Relax from '../pages/Relax';
import Memes from '../pages/Memes';
import FAQs from '../pages/FAQs';
import Volunteer from '../pages/Volunteer';
import ContactUs from '../pages/ContactUs';
import SignUp from '../pages/SignUp';
import AnxietyQuiz from '../pages/AnxietyQuiz';
import DepressionQuiz from '../pages/DepressionQuiz';
import OCDQuiz from '../pages/OCDQuiz';
import ADHDQuiz from '../pages/ADHDQuiz';
import SupportGroups from '../pages/SupportGroups';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="help" element={<Help />} />
          <Route path="articles" element={<Articles />} />
          <Route path="initiatives" element={<Initiatives />} />
          <Route path="support-groups" element={<SupportGroups />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="anxiety-quiz" element={<AnxietyQuiz />} />
          <Route path="depression-quiz" element={<DepressionQuiz />} />
          <Route path="ocd-Quiz" element={<OCDQuiz />} />
          <Route path="adhd-quiz" element={<ADHDQuiz />} />
          


          <Route path="relax" element={<Relax />} />
          <Route path="memes" element={<Memes />} />
          <Route path="faq" element={<FAQs />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;