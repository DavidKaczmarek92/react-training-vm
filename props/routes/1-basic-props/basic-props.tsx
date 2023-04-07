export const BasicProps = () => {
    return (
        <>
            <ChildComponent buttonContent={"b1"} content={"a childs content"}/>
            <ChildComponent buttonContent={"b2"} content={"a childs content 2"}/>
            <ChildComponent buttonContent={"b3"} content={"a childs content 3"}/>
        </>
    );
};

const ChildComponent = (arg:{content:string, buttonContent: string}) => {
    return <div>{arg.content}<button type={"button"}>{arg.buttonContent}</button></div>;
};
