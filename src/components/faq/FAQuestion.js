const FAQuestion = ({ question }) => {
  return (
    <div className="flex justify-between text-white">
      <p className="text-base p-[1px] lg:text-lg">{question}</p>
      <svg
        xmlns="http://www.w3.org/1500/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};
export default FAQuestion;
