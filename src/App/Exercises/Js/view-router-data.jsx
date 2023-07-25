import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataHitTheMole } from './HitTheMoleGame/router-data';
import { blockRouterMetaData as blockRouterMetaDataMemoGame } from './MemoGame/router-data';
// import { blockRouterMetaData as blockRouterMetaDataJSLocalStorage } from './JSLocalStorage/router-data';
import { blockRouterMetaData as blockRouterMetaDataLocalStorageSavedInput } from './SavedInput/router-data';
import { blockRouterMetaData as blockRouterMetaDataTryCatchAndFinally } from './TryCatchAndFinally/router-data';
import { blockRouterMetaData as blockRouterMetaDataTryCatchAndFinallyExercise } from './TryCatchAndFinallyExercise/router-data';
import { blockRouterMetaData as blockRouterMetaDataJSPrototypes } from './Exercise-js-prototypes/router-data';
import { blockRouterMetaData as blockRouterMetaDataExerciseJsThis } from './ExerciseJsThis/router-data';
import { blockRouterMetaData as blockRouterMetaDataFetchData } from './FetchData/router-data';
import { blockRouterMetaData as blockRouterMetaDataPromiseMethodsTraining } from './PromiseMethodsTraining/router-data'; 

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataHitTheMole,
  blockRouterMetaDataMemoGame,
  // blockRouterMetaDataJSLocalStorage,
  blockRouterMetaDataLocalStorageSavedInput,
  blockRouterMetaDataTryCatchAndFinally,
  blockRouterMetaDataTryCatchAndFinallyExercise,
  blockRouterMetaDataJSPrototypes,
  blockRouterMetaDataExerciseJsThis,
  blockRouterMetaDataFetchData,
  blockRouterMetaDataPromiseMethodsTraining,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
