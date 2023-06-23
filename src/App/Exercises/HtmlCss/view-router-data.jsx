import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as GoogleFonts } from './GoogleFonts/router-data';
//import { blockRouterMetaData as Floats } from './FloatsAndPositioning/router-data';

import { blockRouterMetaData as blockRouterDataBoxModel } from './BoxModel/router-data';
import { SelectorsAndCascadeMetaData } from './SelectorsAndCascade/router-data';
import { TextFundamentsMetaData } from './TextFundaments/router-data';
import { blockRouterMetaData as blockRouterMetaDataTables } from './Tables/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  SelectorsAndCascadeMetaData,
  TextFundamentsMetaData,
  GoogleFonts,
  blockRouterDataBoxModel,
  blockRouterMetaDataTables,
  //Floats
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
