import { useState } from 'react';

const Pagination = ({ projects }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const handlePrev = (ev) => {
    ev.preventDefault();
    return prevPage();
  };
  const handleNext = (ev) => {
    ev.preventDefault();
    if (projectList.length > 0) {
      return nextPage();
    }
  };

  return (
    <>
      <div className="pagination-example">
        {currentItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <form action="back" className="pagination">
        <button className="pagination__button" onClick={handlePrev}>
          ← Anterior
        </button>
        <span className="pagination_text">Página {currentPage}</span>
        <button className="pagination__button" onClick={handleNext}>
          Siguiente →
        </button>
      </form>
    </>
  );
};

export default Pagination;
