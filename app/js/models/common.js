'use strict';

import constants from 'modules/constants';

export default {
  furniture: {
    name: constants('add_furniture'),
    data: [
      {
        type: 'section',
        layout: 'line',
        data: [
          {
            name: constants('add_furniture_kitchen'),
            id: 'furniture_kitchen',
            type: 'checkbox',
            icon: 'images/table.svg',
            values: {}
          },
          {
            name: constants('add_furniture_residential'),
            id: 'furniture_residential',
            type: 'checkbox',
            icon: 'images/armchair.svg',
            values: {}
          },
          {
            name: constants('add_fridge'),
            id: 'fridge',
            type: 'checkbox',
            icon: 'images/fridge.svg',
            values: {}
          },
          {
            name: constants('add_tv'),
            id: 'tv',
            type: 'checkbox',
            icon: 'images/television.svg',
            values: {}
          },
          {
            name: constants('add_washer'),
            id: 'washer',
            type: 'checkbox',
            icon: 'images/washing-machine.svg',
            values: {}
          },
          {
            name: constants('add_phone'),
            id: 'phone',
            type: 'checkbox',
            icon: 'images/phone.svg',
            values: {}
          },
          {
            name: constants('add_internet'),
            id: 'internet',
            type: 'checkbox',
            icon: 'images/wifi.svg',
            values: {}
          },
          {
            name: constants('add_dishwasher'),
            id: 'dishwasher',
            type: 'checkbox',
            icon: 'images/dishwasher.svg',
            values: {}
          },
          {
            name: constants('add_conditioner'),
            id: 'conditioner',
            type: 'checkbox',
            icon: 'images/fan.svg',
            values: {}
          }
        ]
      }
    ]
  },
  transaction: {
    name: constants('add_transaction_terms'),
    data: [
      {
        type: 'section',
        layout: 'line',
        data: [
          {
            name: constants('add_price'),
            type: 'number',
            size: 'small',
            values: {
              value: ''
            }
          },
          {
            name: constants('add_currency'),
            type: 'selector',
            size: 'small',
            values: {
              0: {
                name: "AED",
                selected: true
              },
              1: {
                name: "AFN"
              },
              2: {
                name: "ALL"
              },
              3: {
                name: "AMD"
              },
              4: {
                name: "ANG"
              },
              5: {
                name: "AOA"
              },
              6: {
                name: "ARS"
              },
              7: {
                name: "AUD"
              },
              8: {
                name: "AWG"
              },
              9: {
                name: "AZN"
              },
              10: {
                name: "BAM"
              },
              11: {
                name: "BBD"
              },
              12: {
                name: "BDT"
              },
              13: {
                name: "BGN"
              },
              14: {
                name: "BHD"
              },
              15: {
                name: "BIF"
              },
              16: {
                name: "BMD"
              },
              17: {
                name: "BND"
              },
              18: {
                name: "BOB"
              },
              19: {
                name: "BRL"
              },
              20: {
                name: "BSD"
              },
              21: {
                name: "BTN"
              },
              22: {
                name: "BWP"
              },
              23: {
                name: "BYR"
              },
              24: {
                name: "BZD"
              },
              25: {
                name: "CAD"
              },
              26: {
                name: "CDF"
              },
              27: {
                name: "CHF"
              },
              28: {
                name: "CLP"
              },
              29: {
                name: "CNY"
              },
              30: {
                name: "COP"
              },
              31: {
                name: "CRC"
              },
              32: {
                name: "CUC"
              },
              33: {
                name: "CUP"
              },
              34: {
                name: "CVE"
              },
              35: {
                name: "CZK"
              },
              36: {
                name: "DJF"
              },
              37: {
                name: "DKK"
              },
              38: {
                name: "DOP"
              },
              39: {
                name: "DZD"
              },
              40: {
                name: "EGP"
              },
              41: {
                name: "ERN"
              },
              42: {
                name: "ETB"
              },
              43: {
                name: "EUR"
              },
              44: {
                name: "FJD"
              },
              45: {
                name: "FKP"
              },
              46: {
                name: "GBP"
              },
              47: {
                name: "GEL"
              },
              48: {
                name: "GGP"
              },
              49: {
                name: "GHS"
              },
              50: {
                name: "GIP"
              },
              51: {
                name: "GMD"
              },
              52: {
                name: "GNF"
              },
              53: {
                name: "GTQ"
              },
              54: {
                name: "GYD"
              },
              55: {
                name: "HKD"
              },
              56: {
                name: "HNL"
              },
              57: {
                name: "HRK"
              },
              58: {
                name: "HTG"
              },
              59: {
                name: "HUF"
              },
              60: {
                name: "IDR"
              },
              61: {
                name: "ILS"
              },
              62: {
                name: "IMP"
              },
              63: {
                name: "INR"
              },
              64: {
                name: "IQD"
              },
              65: {
                name: "IRR"
              },
              66: {
                name: "ISK"
              },
              67: {
                name: "JEP"
              },
              68: {
                name: "JMD"
              },
              69: {
                name: "JOD"
              },
              70: {
                name: "JPY"
              },
              71: {
                name: "KES"
              },
              72: {
                name: "KGS"
              },
              73: {
                name: "KHR"
              },
              74: {
                name: "KMF"
              },
              75: {
                name: "KPW"
              },
              76: {
                name: "KRW"
              },
              77: {
                name: "KWD"
              },
              78: {
                name: "KYD"
              },
              79: {
                name: "KZT"
              },
              80: {
                name: "LAK"
              },
              81: {
                name: "LBP"
              },
              82: {
                name: "LKR"
              },
              83: {
                name: "LRD"
              },
              84: {
                name: "LSL"
              },
              85: {
                name: "LYD"
              },
              86: {
                name: "MAD"
              },
              87: {
                name: "MDL"
              },
              88: {
                name: "MGA"
              },
              89: {
                name: "MKD"
              },
              90: {
                name: "MMK"
              },
              91: {
                name: "MNT"
              },
              92: {
                name: "MOP"
              },
              93: {
                name: "MRO"
              },
              94: {
                name: "MUR"
              },
              95: {
                name: "MVR"
              },
              96: {
                name: "MWK"
              },
              97: {
                name: "MXN"
              },
              98: {
                name: "MYR"
              },
              99: {
                name: "MZN"
              },
              100: {
                name: "NAD"
              },
              101: {
                name: "NGN"
              },
              102: {
                name: "NIO"
              },
              103: {
                name: "NOK"
              },
              104: {
                name: "NPR"
              },
              105: {
                name: "NZD"
              },
              106: {
                name: "OMR"
              },
              107: {
                name: "PAB"
              },
              108: {
                name: "PEN"
              },
              109: {
                name: "PGK"
              },
              110: {
                name: "PHP"
              },
              111: {
                name: "PKR"
              },
              112: {
                name: "PLN"
              },
              113: {
                name: "PYG"
              },
              114: {
                name: "QAR"
              },
              115: {
                name: "RON"
              },
              116: {
                name: "RSD"
              },
              117: {
                name: "RUB"
              },
              118: {
                name: "RWF"
              },
              119: {
                name: "SAR"
              },
              120: {
                name: "SBD"
              },
              121: {
                name: "SCR"
              },
              122: {
                name: "SDG"
              },
              123: {
                name: "SEK"
              },
              124: {
                name: "SGD"
              },
              125: {
                name: "SHP"
              },
              126: {
                name: "SLL"
              },
              127: {
                name: "SOS"
              },
              128: {
                name: "SPL*"
              },
              129: {
                name: "SRD"
              },
              130: {
                name: "STD"
              },
              131: {
                name: "SVC"
              },
              132: {
                name: "SYP"
              },
              133: {
                name: "SZL"
              },
              134: {
                name: "THB"
              },
              135: {
                name: "TJS"
              },
              136: {
                name: "TMT"
              },
              137: {
                name: "TND"
              },
              138: {
                name: "TOP"
              },
              139: {
                name: "TRY"
              },
              140: {
                name: "TTD"
              },
              141: {
                name: "TVD"
              },
              142: {
                name: "TWD"
              },
              143: {
                name: "TZS"
              },
              144: {
                name: "UAH"
              },
              145: {
                name: "UGX"
              },
              146: {
                name: "USD"
              },
              147: {
                name: "UYU"
              },
              148: {
                name: "UZS"
              },
              149: {
                name: "VEF"
              },
              150: {
                name: "VND"
              },
              151: {
                name: "VUV"
              },
              152: {
                name: "WST"
              },
              153: {
                name: "XAF"
              },
              154: {
                name: "XCD"
              },
              155: {
                name: "XDR"
              },
              156: {
                name: "XOF"
              },
              157: {
                name: "XPF"
              },
              158: {
                name: "YER"
              },
              159: {
                name: "ZAR"
              },
              160: {
                name: "ZMW"
              },
              161: {
                name: "ZWD"
              }
            }
          }
        ]
      },
      {
        type: 'section',
        data: [
          {
            name: constants('add_sale_type'),
            type: 'segments',
            values: {
              1: {
                name: constants('add_sale_type_sale')
              },
              2: {
                name: constants('add_sale_type_interchange')
              }
            }
          }
        ]
      },
      {
        type: 'section',
        data: [
          {
            name: constants('add_mortgage'),
            type: 'segments',
            values: {
              1: {
                name: constants('yes')
              },
              2: {
                name: constants('no')
              }
            }
          }
        ]
      }
    ]
  },
  transport: {
    name: constants('add_transport_accessibility'),
    data: [
      {
        type: 'section',
        layout: 'line',
        data: [
          {
            name: constants('add_metro'),
            type: 'text',
            values: {
              value: ''
            }
          },
          {
            name: constants('add_metro_distance'),
            type: 'text',
            placeholder: constants('km'),
            size: 'small',
            values: {
              value: ''
            }
          }
        ]
      },
      {
        type: 'section',
        data: [
          {
            name: constants('add_city_center_distance'),
            type: 'text',
            placeholder: constants('km'),
            values: {
              value: ''
            }
          }
        ]
      },
      {
        type: 'section',
        layout: 'line',
        data: [
          {
            name: constants('add_buses'),
            type: 'segments',
            values: {
              1: {
                name: constants('yes')
              },
              2: {
                name: constants('no')
              }
            }
          },
          {
            name: constants('add_trains'),
            type: 'segments',
            values: {
              1: {
                name: constants('yes')
              },
              2: {
                name: constants('no')
              }
            }
          },
          {
            name: constants('add_highway'),
            type: 'segments',
            values: {
              1: {
                name: constants('yes')
              },
              2: {
                name: constants('no')
              }
            }
          }
        ]
      }
    ]
  },
  social: {
    name: constants('add_social_objects'),
    data: [
      {
        type: 'section',
        layout: 'line',
        data: [
          {
            name: constants('add_kindergartens'),
            type: 'segments',
            values: {
              1: {
                name: constants('yes')
              },
              2: {
                name: constants('no')
              }
            }
          },
          {
            name: constants('add_schools'),
            type: 'segments',
            values: {
              1: {
                name: constants('yes')
              },
              2: {
                name: constants('no')
              }
            }
          },
          {
            name: constants('add_shops'),
            type: 'segments',
            values: {
              1: {
                name: constants('yes')
              },
              2: {
                name: constants('no')
              }
            }
          }
        ]
      },
      {
        type: 'section',
        layout: 'line',
        data: [
          {
            name: constants('add_clinics'),
            type: 'segments',
            values: {
              1: {
                name: constants('yes')
              },
              2: {
                name: constants('no')
              }
            }
          },
          {
            name: constants('add_shopping_centers'),
            type: 'segments',
            values: {
              1: {
                name: constants('yes')
              },
              2: {
                name: constants('no')
              }
            }
          },
          {
            name: constants('add_sport'),
            type: 'segments',
            values: {
              1: {
                name: constants('yes')
              },
              2: {
                name: constants('no')
              }
            }
          }
        ]
      }
    ]
  },
  additional: {
    name: constants('add_additional'),
    data: [
      {
        name: '',
        type: 'textarea',
        values: {
          value: ''
        }
      }
    ]
  },
  contacts: {
    name: constants('add_contacts'),
    data: [
      {
        name: '',
        type: 'extendable_list',
        placeholder: constants('add_contacts_placeholder'),
        limit: 10,
        values: []
      }
    ]
  },
  photos: {
    name: constants('add_photo'),
    data: [
      {
        name: '',
        type: 'extendable_list',
        placeholder: constants('add_photo_placeholder'),
        limit: 20,
        values: []
      }
    ]
  }
};
