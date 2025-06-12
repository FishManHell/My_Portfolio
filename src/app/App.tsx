interface AppProps {
    className?: string;
}

export const App = (props: AppProps) => {
    const {className} = props;
    return (
        <div className={'app'}>
            Фзз
        </div>
    );
};