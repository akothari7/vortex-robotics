import "../css/FlexContainer.css";

interface FlexContainerProps {
  child1: JSX.Element;
  child2: JSX.Element;
}

export const FlexContainer: React.FC<FlexContainerProps> = (
  props: FlexContainerProps
) => {
  return (
    <div className="flex-container">
      <div className="flex-child" id="affected">
        {props.child1}
      </div>
      <div className="flex-child">{props.child2}</div>
    </div>
  );
};
