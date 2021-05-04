import React from "react";
import SHOP_DATA from "./ShopData";
import PreviewCollection from "../../components/Preview-Collection/Previewcollection";
class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colections: SHOP_DATA,
    };
  }

  render() {
    const colections  = this.state.colections;
    return <div className="shop-page">
    {colections.map(({id,...otherCollections}) =>
        <PreviewCollection key={id} {...otherCollections}/>
    )
}
    </div>;
  }
}

export default ShopPage;
