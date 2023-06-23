import './styles.css';

export const CSSBoxModel = () => {
  return (
    <>
      <p id="unique-id-box-model" className="class-box-model">
        3 Exercises CSS and HTML
      </p>

      <div className="parent-box-model">
        <p id="unique-id-box-model" className="class-box-model">
          2 Exercises CSS and HTML
        </p>
        <p id="unique-id-box-model" className="class-box-model">
          1 Exercises CSS and HTML
        </p>
      </div>
    </>
  );
};
