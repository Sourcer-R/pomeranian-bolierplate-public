import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { SelectorsAndCascadeMetaData } from '../HtmlCss/SelectorsAndCascade/router-data';
import { Block09MetaData } from './Block09/router-data';

//import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactRouterEventsMetaData } from './ReactRouterEvents/router-data';
import { blockRouterMetaData as blockRouterMetaDataLocalDevAndFetch } from './LocalDevAndFetch/router-data';

export const blockRouterMetaData = [
  ReactRouterEventsMetaData,
  ReactRouterEventsMetaData,
  Block09MetaData,
  SelectorsAndCascadeMetaData,
  blockRouterMetaDataLocalDevAndFetch,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
