/**
 * MappingComponent : it displays the entire mapping screen
 *
 * @author Naveen Muthusamy <naveen@wordlift.io>
 * @since 3.24.0
 */

/**
 * External dependencies
 */
import React from 'react'

/**
 * Internal dependencies
 */
import MappingListItemComponent from './MappingListItemComponent'
import { MAPPING_LIST_CHANGED_ACTION, MAPPING_ITEM_CATEGORY_CHANGED_ACTION, MAPPING_LIST_BULK_SELECT_ACTION, MAPPING_LIST_CHOOSEN_CATEGORY_CHANGED_ACTION, MAPPING_ITEM_SELECTED_ACTION, MAPPING_ITEMS_BULK_ACTION, BULK_ACTION_SELECTION_CHANGED_ACTION } from '../actions/actions';
import { connect } from 'react-redux'
import CategoryComponent, { ACTIVE_CATEGORY } from './CategoryComponent';
import BulkActionComponent from './BulkActionComponent';
// Set a reference to the WordLift's Mapping settings stored in the window instance.
const mappingSettings = window["wlMappingsConfig"] || {};

 class MappingComponent extends React.Component {
     componentDidMount() {
         this.getMappingItems()
     }
     bulkActionOptionChangedHandler = ( event ) => {
        const action = BULK_ACTION_SELECTION_CHANGED_ACTION
        action.payload = {
            selectedBulkOption: event.target.value
        }
        this.props.dispatch( action )
     }
     /**
      * Add some keys to mapping items before setting it as
      * state, it is used by ui.
      * @param {Array} mapping_items Mapping items list
      * 
      */
     static applyUiItemFilters( mapping_items ) {
        return mapping_items.map((item)=>(
            {
                ...item,
                // initially no item is selected.
                is_selected: false,
            }
        ))
     }
     /**
      * Convert ui data to api format before posting to api
      * @param {Array} mapping_items Mapping items list
      * 
      */
     static applyApiFilters( mapping_items ) {
         return mapping_items.map((item)=>({
             mapping_id: item.mapping_id,
             mapping_title: item.mapping_title,
             mapping_status: item.mapping_status,
         }))
     }
     /**
      * Extract categories from mapping_items
      * @param {Array} mapping_items Mapping items list
      * @return {Array} List of cateogory objects.
      */
     static extractCategoriesFromMappingItems ( mapping_items ) {
        const categories = {}
        mapping_items.map((item)=> {
            if (!categories.hasOwnProperty(item.mapping_status)) {
                categories[item.mapping_status] = 1
            }
            else {
                categories[item.mapping_status] += 1
            }
        })
        return categories
     }
     /**
      * Selects all the mapping items on the currently active category
      * When triggered on the active, it selects only the active items
      */
     selectAllMappingItems = () => {
        this.props.dispatch( MAPPING_LIST_BULK_SELECT_ACTION )
     }

    switchCategory = ( mappingData, categoryName ) => {
        const action = MAPPING_ITEM_CATEGORY_CHANGED_ACTION
        action.payload = {
            mappingId: mappingData.mapping_id,
            mappingCategory: categoryName
        }
        this.props.dispatch( action )
        // Save Changes to the db
        mappingData.mapping_status = categoryName
        this.updateMappingItems([mappingData])
    }
    updateMappingItems( mapping_items ) {
        fetch(mappingSettings.rest_url,
            {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    "X-WP-Nonce": mappingSettings.wl_mapping_nonce
                },
                body: JSON.stringify(
                        MappingComponent.applyApiFilters(
                            mapping_items
                        )
                    )  
            }
        )
        .then(response => response.json().then(
            data => {
                
            }
        ))
     }

     /**
      * 
      * @param {Array|Object} mapping_items accepts a single 
      * mapping item object or multiple mapping items, clone them by posting
      * to the api endpoint and then refresh the current list.
      */
     duplicateMappingItems = ( mapping_items ) => {
        // If single item is given, construct it to array
        mapping_items = Array.isArray( mapping_items ) ? mapping_items : [ mapping_items ]
        fetch( mappingSettings.rest_url + '/clone', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-WP-Nonce': mappingSettings.wl_mapping_nonce
            },
            body: JSON.stringify( { mapping_items: mapping_items } )
        })
        .then( response => response.json().then(
            data => {
                // Refresh the screen with the cloned mapping item.
                this.getMappingItems()
            }
        ))
     }
     /**
      * Fetch the mapping items from api.
      * @return void
      */
     getMappingItems = () => {
        fetch(mappingSettings.rest_url,
            {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    "X-WP-Nonce": mappingSettings.wl_mapping_nonce
                }
            }
        )
        .then(response => response.json().then(
            data => {
                const action = MAPPING_LIST_CHANGED_ACTION
                action.payload  = {    
                    value: MappingComponent.applyUiItemFilters(data)
                }
                this.props.dispatch( action )
            }
        ))
     }
     /**
      * When the category is selected in the categoryComponent this method
      * is fired.
      * @param {String} category The category choosen by the user
      * @return void 
      */
     categorySelectHandler = ( category ) => {
        const action = MAPPING_LIST_CHOOSEN_CATEGORY_CHANGED_ACTION
        action.payload = {
            categoryName: category
        }
        this.props.dispatch( action )
     }
     /**
      * Called when a mapping item is clicked.
      * @param {Object} mappingData Object represeting single mapping item
      * @return void
      */
     selectMappingItemHandler = ( mappingData ) => {
        const action = MAPPING_ITEM_SELECTED_ACTION
        action.payload = {
            mappingId: mappingData.mapping_id
        }
        console.log( action )
        this.props.dispatch( action )
     }
     bulkActionSubmitHandler = () => {
        const action = MAPPING_ITEMS_BULK_ACTION
        action.payload = {
            duplicateCallBack: this.duplicateMappingItems,
            categoryChangeCallBack: this.updateMappingItems,
        }
        console.log( this.duplicateMappingItems )
        console.log ( action )
        this.props.dispatch( MAPPING_ITEMS_BULK_ACTION )
     }
     render() {
         return (
            <React.Fragment>
                <h1 className="wp-heading-inline wl-mappings-heading-text">
                    Mappings
                    &nbsp;&nbsp;
                    <a href="?page=wl_edit_mapping" className="button wl-mappings-add-new">
                        Add New
                    </a>
                </h1>
                <CategoryComponent 
                    source                = { this.props.mapping_items }
                    categoryKeyName       = 'mapping_status'
                    categories            = { [ 'active', 'trash' ] }
                    categorySelectHandler = { this.categorySelectHandler }
                    choosenCategory       = { this.props.choosen_category }
                /><br/>
                <table className="wp-list-table widefat striped wl-table">
                    <thead>
                        <tr>
                            <th className="wl-check-column">
                                <input type="checkbox" 
                                    onClick = { this.selectAllMappingItems }
                                    checked = { this.props.headerCheckBoxSelected }
                                />
                            </th>
                            <th>
                                <a className="row-title">Title</a>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // show empty screen when there is no mapping items
                            0 === this.props.mapping_items
                            .filter( el => el.mapping_status === ACTIVE_CATEGORY )
                            .length && this.props.choosen_category === ACTIVE_CATEGORY &&
                                <tr>
                                    <td colspan="3">
                                        <div className="wl-container text-center">
                                            No Mapping items found, click on
                                            <b>&nbsp; Add New </b>
                                        </div>
                                    </td>
                                </tr> 
                        }
                        {
                            this.props.mapping_items
                            .filter( el => el.mapping_status === this.props.choosen_category )
                            .map((item, index)=> {
                                return <MappingListItemComponent
                                selectMappingItemHandler = {
                                    this.selectMappingItemHandler
                                }
                                mappingIndex = {
                                    index
                                }
                                duplicateMappingItemHandler={
                                    this.duplicateMappingItems
                                } 
                                switchCategoryHandler= {
                                    this.switchCategory
                                }
                                nonce={mappingSettings.wl_edit_mapping_nonce}
                                mappingData={item}/>
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th className="wl-check-column">
                                <input type="checkbox" 
                                    onClick = { this.selectAllMappingItems }
                                    checked = { this.props.headerCheckBoxSelected }
                                />
                            </th>
                            <th>
                                <a className="row-title">Title</a>
                            </th>
                        </tr>
                    </tfoot>
                </table>
                <div className="wl-container wl-container-full">
                    <BulkActionComponent
                        choosenCategory={this.props.choosen_category}
                        bulkActionOptionChangedHandler = { this.bulkActionOptionChangedHandler }
                        bulkActionSubmitHandler={ this.bulkActionSubmitHandler }
                    />
                </div>
            </React.Fragment>
         )
     }
 }

const mapStateToProps = function(state){ 
    return {
        mapping_items: state.mapping_items,
        choosen_category: state.choosen_category,
        stateObj: state,
        headerCheckBoxSelected: state.headerCheckBoxSelected,
    }
}

export default connect(mapStateToProps)(MappingComponent)
