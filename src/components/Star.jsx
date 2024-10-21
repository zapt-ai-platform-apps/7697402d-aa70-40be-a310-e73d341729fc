function Star(props) {
  return (
    <svg
      class={`w-5 h-5 ${props.filled ? 'text-yellow-400' : 'text-gray-300'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927a1 1 0 011.902 0l1.286 3.957a1 1 0 00.95.69h4.168a1 1 0 01.588 1.81l-3.374 2.455a1 1 0 00-.364 1.118l1.287 3.956a1 1 0 01-1.54 1.118L10 13.347l-3.375 2.455a1 1 0 01-1.54-1.118l1.287-3.956a1 1 0 00-.364-1.118L2.634 9.384a1 1 0 01.588-1.81h4.168a1 1 0 00.95-.69L9.049 2.927z" />
    </svg>
  );
}

export default Star;