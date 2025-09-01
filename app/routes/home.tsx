import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import Resumecard from "~/components/Resumecard";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "IntelliResume" },
    { name: "description", content: "Unlock Your Career Potential with AI-Driven Resume Intelligence." },
  ];
}

export default function Home() {
  return <main className="min-h-screen w-full bg-[url('/images/bg-main.svg')] bg-no-repeat bg-cover bg-fixed">
    <Navbar/>
    <section className="main-section">
      <div className="page-heading">
        <h1>Track Your Applications & Resume Ratings</h1>
        <h2>Review your Submissions & Check AI-Powered Feedback</h2>
      </div>
    </section>

      {resumes.length >0 && (
          <div className="resumes-section">

          {resumes.map((resume) => (
      <Resumecard key={resume.id} resume={resume} />
  
          ))}

          </div>

      )}

   

   


</main>
}
