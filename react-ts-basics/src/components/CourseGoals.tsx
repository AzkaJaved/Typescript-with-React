import { ReactNode } from "react";

type CourseGoalsProps = { title: string; children: ReactNode };
// interface propsType {
//   title: string;
//   description: string;
// }
export default function CourseGoals({ title, children }: CourseGoalsProps) {
  return (
    <article>
      <div>
        <h2>{title} </h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
}
