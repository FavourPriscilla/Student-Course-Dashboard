import { useState } from 'react';
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
  const [filter, setFilter] = useState('all');

  // Filter courses based on user selection
  const filteredCourses = courses.filter(course => {
    if (filter === 'completed') return course.completed;
    if (filter === 'in-progress') return !course.completed;
    return true; // 'all'
  });

  return (
    <main>
      <h1>My Course Dashboard</h1>

      {/* Interactive Filter Buttons */}
      <div className="filter-container">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Courses ({courses.length})
        </button>
        <button 
          className={`filter-btn ${filter === 'in-progress' ? 'active' : ''}`}
          onClick={() => setFilter('in-progress')}
        >
          In Progress
        </button>
        <button 
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>

      {/* Course Grid / Empty State */}
      <section className="grid">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(c => <CourseCard key={c.id} course={c} />)
        ) : (
          <div className="empty-state">
            <span style={{ fontSize: '2.5rem' }}>🔍</span>
            <h3>No Courses Found</h3>
            <p>There are no courses matching this filter category.</p>
          </div>
        )}
      </section>
    </main>
  );
}