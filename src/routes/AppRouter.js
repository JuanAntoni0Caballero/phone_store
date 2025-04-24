import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import PhoneDetail from '../pages/phoneDetail/PhoneDetail';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/detalles/:id" component={PhoneDetail} />
        </Switch>
    );
};

export default AppRouter;
