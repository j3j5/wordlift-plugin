/**
 * External dependencies.
 */
import ReactDOM from "react-dom";
import React from "react";
import {Provider} from "react-redux";
import createSagaMiddleware from "redux-saga";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import {createReducer} from "@reduxjs/toolkit";

/**
 * Internal dependencies.
 */
import {entitySaga} from "../../sagas";
import Entity from "../../components/entity";
import {entityAccepted, entityRejected} from "../../actions";


/**
 * Internal dependencies.
 */
export const TERMS_PAGE_SETTINGS_CONFIG = "_wlVocabularyTermPageSettings";



const sagaMiddleware = createSagaMiddleware();
const reducer = createReducer(null, {});
const store = createStore(reducer, {}, applyMiddleware(sagaMiddleware, thunk, logger));
sagaMiddleware.run(entitySaga);


window.addEventListener("load", () => {
    const pageSettings = window[TERMS_PAGE_SETTINGS_CONFIG];
    const el = document.getElementById("wl_vocabulary_terms_widget");
    const entities = pageSettings["termData"]["entities"];

    const entitySelectedListener = (props) => {
        // Fire inverse actions since the isActive state is set by backend.
        // when the entity is already active we fire the entity rejected action.
        if ( props.isActive ) {
            props.dispatch(entityRejected({
                entityData: props
            }))
        }
        else {
            props.dispatch(entityAccepted({
                entityData: props
            }))
        }
    }

    if (el) {
        ReactDOM.render(
            <Provider store={store}>
                <React.Fragment>
                    <tr>
                        <td style={{width: "70%"}}>
                            {entities.map((entity) => {
                                return (<Entity {...entity}   onEntitySelectedListener={entitySelectedListener} />)
                            })}
                        </td>
                    </tr>
                </React.Fragment>
            </Provider>,
            el
        );
    }


})
