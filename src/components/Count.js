import React from "react";
import {connect} from "react-redux";
import Item from "./Item";


const ItemsList = ({items}) => {

    return (
        <div
            className="item-saved__list"
        >

            {items.map((item, i) => (

                <Item key={i} item={item} idx={i} name={item.name} inn={item.inn} management={item.management} managementPos={item.managementPos} address={item.address} kpp={item.kpp} ogrn={item.ogrn}/>
            ))}
            {items.length}
        </div>
    );
};
const mapStateToProps = ({items}) => ({
    items
});
export default connect(mapStateToProps)(ItemsList);
