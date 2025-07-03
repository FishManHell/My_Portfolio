import cls from "./Home.module.scss"
import classNames from "classnames"
import {Introduction} from "shared/ui/Introduction/Introduction";
import {ProjectsList as Projects} from "entities/Projects";
import {TechStack} from "widgets/TechStack";
import {Footer} from "widgets/Footer";
import {useEffect} from "react";

interface HomePageProps {
    className?: string;
}

const HomePage = (props: HomePageProps) => {
    const {className} = props;

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8000/posts/1', {
                method: 'GET',
            })
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log('Errror')
        }
    }

    useEffect(() => {
        fetchData()
    }, []);


    return (
        <div className={classNames(cls["home"], className)}>
            <Introduction/>
            <TechStack/>
            <Projects/>
            <Footer/>
        </div>
    );
};

export default HomePage;