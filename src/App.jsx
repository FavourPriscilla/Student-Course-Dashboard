import { courses } from './data/courses';

function CourseCard({ course }) {
  return (
    <article className="card">
      <h2>{course.title}</h2>
      <p className="lecturer">Lecturer: {course.lecturer}</p>

      {/* Visual Progress Bar */}
      <div className="progress-container">
        <div className="progress-header">
          <span>Progress</span>
          <span>{course.progress}%</span>
        </div>
        <div className="progress-track">
          <div 
            className={`progress-fill ${course.completed ? 'completed' : ''}`} 
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>
      </div>

      {/* Status Badge */}
      <span className={`badge ${course.completed ? 'completed' : 'in-progress'}`}>
        {course.completed ? 'Completed' : 'In progress'}
      </span>
    </article>
  );
}

export default function App() {
  return (
    <main>
      <h1>My Course Dashboard</h1>
      <section className="grid">
        {courses && courses.length > 0 ? (
          courses.map(c => <CourseCard key={c.id} course={c} />)
        ) : (
          <div className="empty-state">
            <span style={{ fontSize: '2.5rem' }}>📚</span>
            <h3>No Courses Available</h3>
            <p>You haven't added or enrolled in any courses yet. Please check back later or contact your administrator.</p>
          </div>
        )}
      </section>
    </main>
  );
}