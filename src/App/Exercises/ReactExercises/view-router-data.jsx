import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { SelectorsAndCascadeMetaData } from '../HtmlCss/SelectorsAndCascade/router-data';
import { Block09MetaData } from './Block09/router-data';

//import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactRouterEventsMetaData } from './ReactRouterEvents/router-data';
import { blockRouterMetaData as blockRouterMetaDataLocalDevAndFetch } from './LocalDevAndFetch/router-data';
import { blockRouterMetaData as blockRouterMetaDataToDoList } from './ToDoList/router-data';
import { blockRouterMetaData as blockRouterMetaDataReactUseRef } from './ReactUseRef/router-data';
import { blockRouterMetaData as blockRouterMetaDataForms } from './Forms/router-data';
import { blockRouterMetaData as blockRouterMetaDataMoonApp } from './MoonApp/router-data';
import { blockRouterMetaData as blockRouterMetaDataReduxTest } from './ReduxTest/router-data';

export const blockRouterMetaData = [
  ReactRouterEventsMetaData,
  ReactRouterEventsMetaData,
  Block09MetaData,
  SelectorsAndCascadeMetaData,
  blockRouterMetaDataLocalDevAndFetch,
  blockRouterMetaDataToDoList,
  blockRouterMetaDataReactUseRef,
  blockRouterMetaDataForms,
  blockRouterMetaDataMoonApp,
  blockRouterMetaDataReduxTest,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
