
import { cloneDeep, forEach, forIn } from 'lodash';
import { parse } from 'querystring';
import routes from '../../config/routes';
import ExportJsonExcel from 'js-export-excel';

/* eslint no-useless-escape:0 import/prefer-default-export:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export const isUrl = (path: string): boolean => reg.test(path);

export const isAntDesignPro = (): boolean => {
  if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
    return true;
  }
  return window.location.hostname === 'preview.pro.ant.design';
};

// For the official demo site, it is used to turn off features that are not needed in the real development environment
export const isAntDesignProOrDev = (): boolean => {
  const { NODE_ENV } = process.env;
  if (NODE_ENV === 'development') {
    return true;
  }
  return isAntDesignPro();
};

export const getPageQuery = () => parse(window.location.href.split('?')[1]);

// 转化数据字典格式 (下拉框格式)
const toDictData = <T>(dict: any): T => {
  const dictData = {};
  forIn(dict, (obj, item) => {
    const arr: { value: string | number; label: string | number }[] = [];
    forIn(obj, (label, value) => {
      arr.push({ value, label });
    });
    dictData[item] = arr;
  });
  return <T>dictData;
};

// enumtoOptions
// disabledArr 需要禁用的选项  数组格式
const enumtoOptions = ({ data, disabledArr = [] }: { data: any; disabledArr?: string[] }) => {
  const arr: { value: string | number; label: string | number; disabled?: boolean }[] = [];
  if (!data) {
    return arr;
  }
  forIn(data, (label, value) => {
    const obj: { value: string | number; label: string | number; disabled?: boolean } = {
      value,
      label,
    };
    if (disabledArr.includes(`${value}`)) {
      obj.disabled = true;
    }
    arr.push(obj);
  });
  return arr;
};

type ExcelOption = {
  fileName: string;
  datas: {
    sheetData: any;
    sheetName: any;
    sheetFilter: string[];
    sheetHeader: string[];
    columnWidths?: string[];
  }[];
};
// excel导出
const exportExcel = ({ columns, data, name }: { columns: any; data: any; name?: any }) => {
  const option: ExcelOption = {
    fileName: name || 'excel',
    datas: [],
  };
  const sheetFilter: string[] = [];
  const sheetHeader: string[] = [];
  columns.forEach((item: { dataIndex: string; title: string }) => {
    if (item.dataIndex) {
      sheetFilter.push(item.dataIndex);
      sheetHeader.push(item.title);
    }
  });
  option.datas = [
    {
      sheetData: data,
      sheetName: 'sheet',
      sheetFilter: sheetFilter,
      sheetHeader: sheetHeader,
      // columnWidths: columnWidths
    },
  ];
  const toExcel = new ExportJsonExcel(option); //new
  toExcel.saveExcel(); //保存
};

// tree格式数据铺平
const treeDataToTile = (data: any, childName = 'child', arr: any = [],) => {
  data.forEach((item: { [x: string]: any }) => {
    arr.push(item);
    if (item[childName] && item[childName].length > 0) {
      treeDataToTile(item[childName], childName, arr);
    }
    delete item[childName];
  });
  return arr;
};


// get请求params 转换    symbol 连接的符号
const paramToString = (obj: any, symbol = '&') => {
  const arr: any = [];
  forIn(obj, (key, value) => {
    if (key || key === 0) {
      arr.push(`${value}=${key}`);
    }
  });
  return arr.join(symbol);
};

// 文件下载
const downloadFilePackage = async ({
  name,
  api,
  params,
}: {
  name: string;
  api: any;
  params?: any;
}) => {
  const res = await api(params);
  const blob = new Blob([res], { type: 'application/octet-stream' });
  const downloadUrl = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = downloadUrl;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(downloadUrl);
};

const regCheck = (str: string, reg: RegExp) => {
  return !!(!str || reg.test(str));
};

// 校验手机号码
const checkPhone = (str: string) => {
  return regCheck(str, /^1[34578]\d{9}$/);
};

// 校验邮编
const checkPostcode = (str: string) => {
  return regCheck(str, /^[0-9]{6}$/);
};
// 校验数字字母组合
const checkNumbersOrLetters = (str: string) => {
  return regCheck(str, /^[A-Za-z0-9]{0,20}$/);
};
// 校验非0正整数
const checkNonzeroInteger = (str: string) => {
  return regCheck(str, /^[1-9]\d*$/);
};
// 校验含0正整数
const checkInteger = (str: string) => {
  return regCheck(str, /^-?[0-9]\d*$/);
};
// 校验以数字1开头的纯数字整数
const checkOnetoInteger = (str: string) => {
  return regCheck(str, /^-?[0-9]\d*$/);
};
const toNum = (code: string) => {
  switch (code) {
    case '0':
      return 0;
    case '1':
      return 1;
    case '2':
      return 2;
    case '3':
      return 3;
    case '4':
      return 4;
    case '5':
      return 5;
    case '6':
      return 6;
    case '7':
      return 7;
    case '8':
      return 8;
    case '9':
      return 9;
    case 'A':
      return 10;
    case 'B':
      return 11;
    case 'C':
      return 12;
    case 'D':
      return 13;
    case 'E':
      return 14;
    case 'F':
      return 15;
    case 'G':
      return 16;
    case 'H':
      return 17;
    case 'I':
      return 18;
    case 'J':
      return 19;
    case 'K':
      return 20;
    case 'L':
      return 21;
    case 'M':
      return 22;
    case 'N':
      return 23;
    case 'O':
      return 24;
    case 'P':
      return 25;
    case 'Q':
      return 26;
    case 'R':
      return 27;
    case 'S':
      return 28;
    case 'T':
      return 29;
    case 'U':
      return 30;
    case 'V':
      return 31;
    case 'W':
      return 32;
    case 'X':
      return 33;
    case 'Y':
      return 34;
    default:
      return 35;
  }
};

// 验证组织机构代码 第九位验证码
const checkOrganizationCode = (code: string) => {
  // 加权因子
  const weightedfactors = [3, 7, 9, 10, 5, 8, 4, 2];
  // 代码和对应位数加权因子相乘  所有代码相加
  const total = Array.from(code).reduce((num, item, index) => {
    return num + toNum(item) * weightedfactors[index];
  }, 0);
  // 余数
  const remainder = total % 11;
  // 11-余数是几验证码就是几 10为X
  const parityCheckCodes = 11 - remainder;
  if (parityCheckCodes === 10) {
    return 'X';
  }
  return parityCheckCodes;
};
// 多选下拉框多选获取下拉的名称
const getSelectNames = ({ data, keys }: any) => {
  const arr: string[] = [];
  if (keys && data) {
    keys?.forEach((item: string | number) => {
      arr.push(data[item]);
    });
  }

  return arr.join();
};

// 获取项目路由
const routesToTile = () => {
  const arr: any[] = [];
  const getRoutes = (data: any[]) => {
    data.forEach((item) => {
      if (item.component === '../layouts/BasicLayout') {
        arr.push(...item.routes);
        return;
      }
      if (item.routes) {
        getRoutes(item.routes);
      }
    });
  };
  getRoutes(cloneDeep(routes));
  return treeDataToTile(arr, 'routes').filter((item: { name: any }) => item.name);
};

// 树格式数据转换children属性
/**
 * 
 * @param data 数据
 * @param childFied  对象格式   key 是转换成的属性  value 是被转换成的属性 
 *          {
*            // 被转换的属性         需要转换的属性
              organizeChildrenList: 'children',
              organizeName: 'title',
              id: 'value',
            }
 */

const treeToChildren = (data: any[], childFied: object): any => {
  const fideObj = { children: 'children', ...childFied };
  data.forEach((item) => {
    const obj = item;
    // 此处是lodash中的forEach 可以遍历对象
    forEach(fideObj, (value, key) => {
      obj[key] = obj[value];
      if (key === 'children' && value !== 'children') {
        delete obj[value];
      }
      if (key === 'children') {
        if (obj[key] && obj[key].length > 0) {
          treeToChildren(obj[key] || [], fideObj);
        }
      }
    });
  });

  return data;
};

export {
  // 树格式数据转换children属性
  treeToChildren,
  // 路由数据平铺
  routesToTile,
  toDictData,
  // 多选下拉框多选获取下拉的名称
  getSelectNames,
  exportExcel,
  // tree格式数据铺平
  treeDataToTile,
  paramToString,
  // 校验手机号码
  checkPhone,
  downloadFilePackage,
  // 校验邮编
  checkPostcode,
  // 校验数字字母组合
  checkNumbersOrLetters,
  // 校验非0正整数
  checkNonzeroInteger,
  // 校验正整数
  checkInteger,
  //校验以数字1开头的正整数
  checkOnetoInteger,
  // 验证组织机构代码 第九位验证码
  checkOrganizationCode,
  // enumtoOptions
  enumtoOptions,
};
