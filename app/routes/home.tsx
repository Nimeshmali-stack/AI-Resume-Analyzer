import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import Resumecard from "~/components/Resumecard";
import { usePuterStore } from "~/lib/puter";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { useEffect } from "react";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "IntelliResume" },
    { name: "description", content: "Unlock Your Career Potential with AI-Driven Resume Intelligence." },
  ];
}

export default function Home() {
  const {auth} = usePuterStore();
  const navigate= useNavigate();
  useEffect(() => {
    if (!auth.isAuthenticated) navigate('/auth?next=/');
      }, [auth.isAuthenticated])



  return <main className="min-h-screen w-full bg-[url('/images/bg-main.svg')] bg-no-repeat bg-cover bg-fixed">
    <Navbar/>
    
    <section className="main-section">
      <div className="page-heading py=16">
        <h1>Track Your Applications & Resume Ratings</h1>
        <h2>Review your Submissions & Check AI-Powered Feedback</h2>
      </div>

       {resumes.length >0 && (
          <div className="resumes-section">

          {resumes.map((resume) => (
          <Resumecard key={resume.id} resume={resume} />
  
          ))}

          </div>

      )}
    </section>

     

</main>
}
