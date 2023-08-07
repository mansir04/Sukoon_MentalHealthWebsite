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

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="help" element={<Help />} />
          <Route path="articles" element={<Articles />} />
          <Route path="initiatives" element={<Initiatives />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="quiz" element={<Quiz />} />
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
