'use strict';

import constants from 'modules/constants';

export default {
  initial: {
    data: {
      name: {
        type: 'text',
        name: constants('add_name'),
        required: true,
        error_text: constants('add_name_error'),
        values: {
          value: ''
        }
      },
      transaction: {
        type: 'section',
        layout: 'line',
        data: {
          realty_type: {
            name: constants('add_realty_type'),
            required: true,
            error_text: constants('add_realty_type_error'),
            type: 'segments',
            values: {
              1: {
                name: constants('add_realty_type_apartment'),
                id: 'apartment'
              },
              2: {
                name: constants('add_realty_type_house'),
                id: 'house'
              }
            }
          },
          transaction_type: {
            name: constants('add_transaction_type'),
            required: true,
            error_text: constants('add_transaction_type_error'),
            type: 'segments',
            values: {
              1: {
                name: constants('add_transaction_type_rent'),
                id: 'rent'
              },
              2: {
                name: constants('add_transaction_type_buy'),
                id: 'buy'
              }
            }
          },
          price: {
            type: 'section',
            layout: 'line',
            data: {
              price_amount: {
                name: constants('add_price'),
                required: true,
                error_text: constants('add_price_error'),
                type: 'number',
                size: 'small',
                values: {
                  value: ''
                }
              },
              price_currency: {
                name: constants('add_currency'),
                required: true,
                error_text: constants('add_currency_error'),
                type: 'selector',
                size: 'small',
                values: {
                  0: {
                    name: "AED"
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
                    name: "USD",
                    selected: true
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
            }
          },
          pledge: {
            type: 'section',
            layout: 'line',
            data: {
              amount: {
                name: constants('add_price_pledge'),
                type: 'number',
                size: 'small',
                values: {
                  value: ''
                }
              },
              realtor: {
                name: constants('add_price_realtor'),
                type: 'number',
                size: 'small',
                values: {
                  value: ''
                }
              }
            }
          },
          sale_type: {
            type: 'section',
            data: {
              type: {
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
              },
              mortgage: {
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
            }
          }
        }
      },
      address: {
        name: constants('add_address'),
        required: true,
        error_text: constants('add_address_error'),
        type: 'address',
        values: {
          value: '',
          map: {}
        }
      }
    }
  },
  furniture: {
    name: constants('add_furniture'),
    data: {
      furniture: {
        type: 'section',
        layout: 'line',
        data: {
          kitchen: {
            name: constants('add_furniture_kitchen'),
            id: 'furniture_kitchen',
            type: 'checkbox',
            icon: 'images/table.svg',
            values: {}
          },
          residential: {
            name: constants('add_furniture_residential'),
            id: 'furniture_residential',
            type: 'checkbox',
            icon: 'images/armchair.svg',
            values: {}
          },
          fridge: {
            name: constants('add_fridge'),
            id: 'fridge',
            type: 'checkbox',
            icon: 'images/fridge.svg',
            values: {}
          },
          tv: {
            name: constants('add_tv'),
            id: 'tv',
            type: 'checkbox',
            icon: 'images/television.svg',
            values: {}
          },
          washer: {
            name: constants('add_washer'),
            id: 'washer',
            type: 'checkbox',
            icon: 'images/washing-machine.svg',
            values: {}
          },
          phone: {
            name: constants('add_phone'),
            id: 'phone',
            type: 'checkbox',
            icon: 'images/phone.svg',
            values: {}
          },
          internet: {
            name: constants('add_internet'),
            id: 'internet',
            type: 'checkbox',
            icon: 'images/wifi.svg',
            values: {}
          },
          dishwasher: {
            name: constants('add_dishwasher'),
            id: 'dishwasher',
            type: 'checkbox',
            icon: 'images/dishwasher.svg',
            values: {}
          },
          conditioner: {
            name: constants('add_conditioner'),
            id: 'conditioner',
            type: 'checkbox',
            icon: 'images/fan.svg',
            values: {}
          }
        }
      }
    }
  },
  transport: {
    name: constants('add_transport_accessibility'),
    data: {
      metro: {
        type: 'section',
        layout: 'line',
        data: {
          station: {
            name: constants('add_metro'),
            type: 'text',
            values: {
              value: ''
            }
          },
          distance: {
            name: constants('add_metro_distance'),
            type: 'text',
            placeholder: constants('km'),
            size: 'small',
            values: {
              value: ''
            }
          }
        }
      },
      city_center: {
        type: 'section',
        data: {
          distance: {
            name: constants('add_city_center_distance'),
            type: 'text',
            placeholder: constants('km'),
            values: {
              value: ''
            }
          }
        }
      },
      other: {
        type: 'section',
        layout: 'line',
        data: {
          buses: {
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
          trains: {
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
          highway: {
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
        }
      }
    }
  },
  social: {
    name: constants('add_social_objects'),
    data: {
      education_childs: {
        type: 'section',
        layout: 'line',
        data: {
          kindergartens: {
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
          schools: {
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
          clinics: {
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
          }
        }
      },
      shops_sport: {
        type: 'section',
        layout: 'line',
        data: {
          shops: {
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
          },
          shopping_centers: {
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
          sport: {
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
        }
      }
    }
  },
  additional: {
    name: constants('add_additional'),
    data: {
      text: {
        name: '',
        type: 'textarea',
        values: {
          value: ''
        }
      }
    }
  },
  contacts: {
    name: constants('add_contacts'),
    data: {
      list: {
        name: '',
        type: 'extendable_list',
        placeholder: constants('add_contacts_placeholder'),
        limit: 10,
        values: []
      }
    }
  },
  photos: {
    name: constants('add_photo'),
    data: {
      list: {
        name: '',
        type: 'extendable_list',
        placeholder: constants('add_photo_placeholder'),
        limit: 20,
        values: []
      }
    }
  }
};
