import './App.css';
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import AddInventory from './components/classComponent';
// import AddProduct from './components/funcComponent';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CIA Inventory</h1>
        <AddInventory/>
      </header>
      <AmplifySignOut />     
    </div>
  );
}
export default withAuthenticator(App);
