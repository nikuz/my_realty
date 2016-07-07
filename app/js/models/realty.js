'use strict';

import constants from 'modules/constants';

export default {
  initial: {
    type: 'common',
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
                    name: 'AED'
                  },
                  1: {
                    name: 'AFN'
                  },
                  2: {
                    name: 'ALL'
                  },
                  3: {
                    name: 'AMD'
                  },
                  4: {
                    name: 'ANG'
                  },
                  5: {
                    name: 'AOA'
                  },
                  6: {
                    name: 'ARS'
                  },
                  7: {
                    name: 'AUD'
                  },
                  8: {
                    name: 'AWG'
                  },
                  9: {
                    name: 'AZN'
                  },
                  10: {
                    name: 'BAM'
                  },
                  11: {
                    name: 'BBD'
                  },
                  12: {
                    name: 'BDT'
                  },
                  13: {
                    name: 'BGN'
                  },
                  14: {
                    name: 'BHD'
                  },
                  15: {
                    name: 'BIF'
                  },
                  16: {
                    name: 'BMD'
                  },
                  17: {
                    name: 'BND'
                  },
                  18: {
                    name: 'BOB'
                  },
                  19: {
                    name: 'BRL'
                  },
                  20: {
                    name: 'BSD'
                  },
                  21: {
                    name: 'BTN'
                  },
                  22: {
                    name: 'BWP'
                  },
                  23: {
                    name: 'BYR'
                  },
                  24: {
                    name: 'BZD'
                  },
                  25: {
                    name: 'CAD'
                  },
                  26: {
                    name: 'CDF'
                  },
                  27: {
                    name: 'CHF'
                  },
                  28: {
                    name: 'CLP'
                  },
                  29: {
                    name: 'CNY'
                  },
                  30: {
                    name: 'COP'
                  },
                  31: {
                    name: 'CRC'
                  },
                  32: {
                    name: 'CUC'
                  },
                  33: {
                    name: 'CUP'
                  },
                  34: {
                    name: 'CVE'
                  },
                  35: {
                    name: 'CZK'
                  },
                  36: {
                    name: 'DJF'
                  },
                  37: {
                    name: 'DKK'
                  },
                  38: {
                    name: 'DOP'
                  },
                  39: {
                    name: 'DZD'
                  },
                  40: {
                    name: 'EGP'
                  },
                  41: {
                    name: 'ERN'
                  },
                  42: {
                    name: 'ETB'
                  },
                  43: {
                    name: 'EUR'
                  },
                  44: {
                    name: 'FJD'
                  },
                  45: {
                    name: 'FKP'
                  },
                  46: {
                    name: 'GBP'
                  },
                  47: {
                    name: 'GEL'
                  },
                  48: {
                    name: 'GGP'
                  },
                  49: {
                    name: 'GHS'
                  },
                  50: {
                    name: 'GIP'
                  },
                  51: {
                    name: 'GMD'
                  },
                  52: {
                    name: 'GNF'
                  },
                  53: {
                    name: 'GTQ'
                  },
                  54: {
                    name: 'GYD'
                  },
                  55: {
                    name: 'HKD'
                  },
                  56: {
                    name: 'HNL'
                  },
                  57: {
                    name: 'HRK'
                  },
                  58: {
                    name: 'HTG'
                  },
                  59: {
                    name: 'HUF'
                  },
                  60: {
                    name: 'IDR'
                  },
                  61: {
                    name: 'ILS'
                  },
                  62: {
                    name: 'IMP'
                  },
                  63: {
                    name: 'INR'
                  },
                  64: {
                    name: 'IQD'
                  },
                  65: {
                    name: 'IRR'
                  },
                  66: {
                    name: 'ISK'
                  },
                  67: {
                    name: 'JEP'
                  },
                  68: {
                    name: 'JMD'
                  },
                  69: {
                    name: 'JOD'
                  },
                  70: {
                    name: 'JPY'
                  },
                  71: {
                    name: 'KES'
                  },
                  72: {
                    name: 'KGS'
                  },
                  73: {
                    name: 'KHR'
                  },
                  74: {
                    name: 'KMF'
                  },
                  75: {
                    name: 'KPW'
                  },
                  76: {
                    name: 'KRW'
                  },
                  77: {
                    name: 'KWD'
                  },
                  78: {
                    name: 'KYD'
                  },
                  79: {
                    name: 'KZT'
                  },
                  80: {
                    name: 'LAK'
                  },
                  81: {
                    name: 'LBP'
                  },
                  82: {
                    name: 'LKR'
                  },
                  83: {
                    name: 'LRD'
                  },
                  84: {
                    name: 'LSL'
                  },
                  85: {
                    name: 'LYD'
                  },
                  86: {
                    name: 'MAD'
                  },
                  87: {
                    name: 'MDL'
                  },
                  88: {
                    name: 'MGA'
                  },
                  89: {
                    name: 'MKD'
                  },
                  90: {
                    name: 'MMK'
                  },
                  91: {
                    name: 'MNT'
                  },
                  92: {
                    name: 'MOP'
                  },
                  93: {
                    name: 'MRO'
                  },
                  94: {
                    name: 'MUR'
                  },
                  95: {
                    name: 'MVR'
                  },
                  96: {
                    name: 'MWK'
                  },
                  97: {
                    name: 'MXN'
                  },
                  98: {
                    name: 'MYR'
                  },
                  99: {
                    name: 'MZN'
                  },
                  100: {
                    name: 'NAD'
                  },
                  101: {
                    name: 'NGN'
                  },
                  102: {
                    name: 'NIO'
                  },
                  103: {
                    name: 'NOK'
                  },
                  104: {
                    name: 'NPR'
                  },
                  105: {
                    name: 'NZD'
                  },
                  106: {
                    name: 'OMR'
                  },
                  107: {
                    name: 'PAB'
                  },
                  108: {
                    name: 'PEN'
                  },
                  109: {
                    name: 'PGK'
                  },
                  110: {
                    name: 'PHP'
                  },
                  111: {
                    name: 'PKR'
                  },
                  112: {
                    name: 'PLN'
                  },
                  113: {
                    name: 'PYG'
                  },
                  114: {
                    name: 'QAR'
                  },
                  115: {
                    name: 'RON'
                  },
                  116: {
                    name: 'RSD'
                  },
                  117: {
                    name: 'RUB'
                  },
                  118: {
                    name: 'RWF'
                  },
                  119: {
                    name: 'SAR'
                  },
                  120: {
                    name: 'SBD'
                  },
                  121: {
                    name: 'SCR'
                  },
                  122: {
                    name: 'SDG'
                  },
                  123: {
                    name: 'SEK'
                  },
                  124: {
                    name: 'SGD'
                  },
                  125: {
                    name: 'SHP'
                  },
                  126: {
                    name: 'SLL'
                  },
                  127: {
                    name: 'SOS'
                  },
                  128: {
                    name: 'SPL*'
                  },
                  129: {
                    name: 'SRD'
                  },
                  130: {
                    name: 'STD'
                  },
                  131: {
                    name: 'SVC'
                  },
                  132: {
                    name: 'SYP'
                  },
                  133: {
                    name: 'SZL'
                  },
                  134: {
                    name: 'THB'
                  },
                  135: {
                    name: 'TJS'
                  },
                  136: {
                    name: 'TMT'
                  },
                  137: {
                    name: 'TND'
                  },
                  138: {
                    name: 'TOP'
                  },
                  139: {
                    name: 'TRY'
                  },
                  140: {
                    name: 'TTD'
                  },
                  141: {
                    name: 'TVD'
                  },
                  142: {
                    name: 'TWD'
                  },
                  143: {
                    name: 'TZS'
                  },
                  144: {
                    name: 'UAH'
                  },
                  145: {
                    name: 'UGX'
                  },
                  146: {
                    name: 'USD',
                    selected: true
                  },
                  147: {
                    name: 'UYU'
                  },
                  148: {
                    name: 'UZS'
                  },
                  149: {
                    name: 'VEF'
                  },
                  150: {
                    name: 'VND'
                  },
                  151: {
                    name: 'VUV'
                  },
                  152: {
                    name: 'WST'
                  },
                  153: {
                    name: 'XAF'
                  },
                  154: {
                    name: 'XCD'
                  },
                  155: {
                    name: 'XDR'
                  },
                  156: {
                    name: 'XOF'
                  },
                  157: {
                    name: 'XPF'
                  },
                  158: {
                    name: 'YER'
                  },
                  159: {
                    name: 'ZAR'
                  },
                  160: {
                    name: 'ZMW'
                  },
                  161: {
                    name: 'ZWD'
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
  apartment: {
    name: constants('add_apartment_info'),
    type: 'apartment',
    data: {
      rooms: {
        type: 'section',
        data: [
          {
            name: constants('add_rooms'),
            type: 'segments',
            values: {
              1: {
                name: 1,
                selected: true
              },
              2: {
                name: 2
              },
              3: {
                name: 3
              },
              4: {
                name: 4
              },
              5: {
                name: 5
              },
              6: {
                name: 6
              },
              7: {
                name: 7
              },
              8: {
                name: 8
              },
              9: {
                name: 9
              },
              10: {
                name: constants('add_rooms_more')
              }
            }
          }
        ]
      },
      floors: {
        type: 'section',
        layout: 'line',
        data: {
          current: {
            name: constants('add_floor'),
            type: 'number',
            size: 'small',
            values: {
              value: ''
            }
          },
          total: {
            name: constants('add_floor_total'),
            type: 'number',
            size: 'small',
            values: {
              value: ''
            }
          }
        }
      },
      area: {
        type: 'section',
        layout: 'line',
        data: {
          all: {
            name: constants('add_area'),
            placeholder: constants('sqm'),
            type: 'number',
            size: 'small',
            values: {
              value: ''
            }
          },
          living_area: {
            name: constants('add_living_area'),
            placeholder: constants('sqm'),
            type: 'number',
            size: 'small',
            values: {
              value: ''
            }
          },
          kitchen_area: {
            name: constants('add_kitchen_area'),
            placeholder: constants('sqm'),
            type: 'number',
            size: 'small',
            values: {
              value: ''
            }
          }
        }
      },
      rooms_area: {
        name: constants('add_rooms_area'),
        placeholder: constants('sqm'),
        type: 'text',
        values: {
          value: ''
        }
      },
      loggia_balcony: {
        type: 'section',
        layout: 'line',
        data: {
          loggia: {
            name: constants('add_loggia'),
            placeholder: constants('sqm'),
            size: 'small',
            type: 'text',
            values: {
              value: ''
            }
          },
          balcony: {
            name: constants('add_balcony'),
            placeholder: constants('sqm'),
            size: 'small',
            type: 'text',
            values: {
              value: ''
            }
          }
        }
      },
      toilets: {
        type: 'section',
        layout: 'line',
        data: {
          separate: {
            name: constants('add_separate_toilets'),
            placeholder: constants('count'),
            size: 'small',
            type: 'number',
            values: {
              value: ''
            }
          },
          combined: {
            name: constants('add_combined_bathroom'),
            placeholder: constants('count'),
            size: 'small',
            type: 'number',
            values: {
              value: ''
            }
          }
        }
      },
      windows: {
        name: constants('add_windows'),
        type: 'segments',
        values: {
          1: {
            name: constants('add_windows_courtyard_street')
          },
          2: {
            name: constants('add_windows_courtyard')
          },
          3: {
            name: constants('add_windows_street')
          }
        }
      }
    }
  },
  building_info: {
    name: constants('add_house_info'),
    type: 'apartment',
    data: {
      ceiling_year: {
        type: 'section',
        layout: 'line',
        data: {
          year: {
            name: constants('add_construction_year'),
            type: 'selector',
            size: 'small',
            values: {
              1800: {'name': 1800},
              1801: {'name': 1801},
              1802: {'name': 1802},
              1803: {'name': 1803},
              1804: {'name': 1804},
              1805: {'name': 1805},
              1806: {'name': 1806},
              1807: {'name': 1807},
              1808: {'name': 1808},
              1809: {'name': 1809},
              1810: {'name': 1810},
              1811: {'name': 1811},
              1812: {'name': 1812},
              1813: {'name': 1813},
              1814: {'name': 1814},
              1815: {'name': 1815},
              1816: {'name': 1816},
              1817: {'name': 1817},
              1818: {'name': 1818},
              1819: {'name': 1819},
              1820: {'name': 1820},
              1821: {'name': 1821},
              1822: {'name': 1822},
              1823: {'name': 1823},
              1824: {'name': 1824},
              1825: {'name': 1825},
              1826: {'name': 1826},
              1827: {'name': 1827},
              1828: {'name': 1828},
              1829: {'name': 1829},
              1830: {'name': 1830},
              1831: {'name': 1831},
              1832: {'name': 1832},
              1833: {'name': 1833},
              1834: {'name': 1834},
              1835: {'name': 1835},
              1836: {'name': 1836},
              1837: {'name': 1837},
              1838: {'name': 1838},
              1839: {'name': 1839},
              1840: {'name': 1840},
              1841: {'name': 1841},
              1842: {'name': 1842},
              1843: {'name': 1843},
              1844: {'name': 1844},
              1845: {'name': 1845},
              1846: {'name': 1846},
              1847: {'name': 1847},
              1848: {'name': 1848},
              1849: {'name': 1849},
              1850: {'name': 1850},
              1851: {'name': 1851},
              1852: {'name': 1852},
              1853: {'name': 1853},
              1854: {'name': 1854},
              1855: {'name': 1855},
              1856: {'name': 1856},
              1857: {'name': 1857},
              1858: {'name': 1858},
              1859: {'name': 1859},
              1860: {'name': 1860},
              1861: {'name': 1861},
              1862: {'name': 1862},
              1863: {'name': 1863},
              1864: {'name': 1864},
              1865: {'name': 1865},
              1866: {'name': 1866},
              1867: {'name': 1867},
              1868: {'name': 1868},
              1869: {'name': 1869},
              1870: {'name': 1870},
              1871: {'name': 1871},
              1872: {'name': 1872},
              1873: {'name': 1873},
              1874: {'name': 1874},
              1875: {'name': 1875},
              1876: {'name': 1876},
              1877: {'name': 1877},
              1878: {'name': 1878},
              1879: {'name': 1879},
              1880: {'name': 1880},
              1881: {'name': 1881},
              1882: {'name': 1882},
              1883: {'name': 1883},
              1884: {'name': 1884},
              1885: {'name': 1885},
              1886: {'name': 1886},
              1887: {'name': 1887},
              1888: {'name': 1888},
              1889: {'name': 1889},
              1890: {'name': 1890},
              1891: {'name': 1891},
              1892: {'name': 1892},
              1893: {'name': 1893},
              1894: {'name': 1894},
              1895: {'name': 1895},
              1896: {'name': 1896},
              1897: {'name': 1897},
              1898: {'name': 1898},
              1899: {'name': 1899},
              1900: {'name': 1900},
              1901: {'name': 1901},
              1902: {'name': 1902},
              1903: {'name': 1903},
              1904: {'name': 1904},
              1905: {'name': 1905},
              1906: {'name': 1906},
              1907: {'name': 1907},
              1908: {'name': 1908},
              1909: {'name': 1909},
              1910: {'name': 1910},
              1911: {'name': 1911},
              1912: {'name': 1912},
              1913: {'name': 1913},
              1914: {'name': 1914},
              1915: {'name': 1915},
              1916: {'name': 1916},
              1917: {'name': 1917},
              1918: {'name': 1918},
              1919: {'name': 1919},
              1920: {'name': 1920},
              1921: {'name': 1921},
              1922: {'name': 1922},
              1923: {'name': 1923},
              1924: {'name': 1924},
              1925: {'name': 1925},
              1926: {'name': 1926},
              1927: {'name': 1927},
              1928: {'name': 1928},
              1929: {'name': 1929},
              1930: {'name': 1930},
              1931: {'name': 1931},
              1932: {'name': 1932},
              1933: {'name': 1933},
              1934: {'name': 1934},
              1935: {'name': 1935},
              1936: {'name': 1936},
              1937: {'name': 1937},
              1938: {'name': 1938},
              1939: {'name': 1939},
              1940: {'name': 1940},
              1941: {'name': 1941},
              1942: {'name': 1942},
              1943: {'name': 1943},
              1944: {'name': 1944},
              1945: {'name': 1945},
              1946: {'name': 1946},
              1947: {'name': 1947},
              1948: {'name': 1948},
              1949: {'name': 1949},
              1950: {'name': 1950},
              1951: {'name': 1951},
              1952: {'name': 1952},
              1953: {'name': 1953},
              1954: {'name': 1954},
              1955: {'name': 1955},
              1956: {'name': 1956},
              1957: {'name': 1957},
              1958: {'name': 1958},
              1959: {'name': 1959},
              1960: {'name': 1960},
              1961: {'name': 1961},
              1962: {'name': 1962},
              1963: {'name': 1963},
              1964: {'name': 1964},
              1965: {'name': 1965},
              1966: {'name': 1966},
              1967: {'name': 1967},
              1968: {'name': 1968},
              1969: {'name': 1969},
              1970: {'name': 1970},
              1971: {'name': 1971},
              1972: {'name': 1972},
              1973: {'name': 1973},
              1974: {'name': 1974},
              1975: {'name': 1975},
              1976: {'name': 1976},
              1977: {'name': 1977},
              1978: {'name': 1978},
              1979: {'name': 1979},
              1980: {'name': 1980},
              1981: {'name': 1981},
              1982: {'name': 1982},
              1983: {'name': 1983},
              1984: {'name': 1984},
              1985: {'name': 1985},
              1986: {'name': 1986},
              1987: {'name': 1987},
              1988: {'name': 1988},
              1989: {'name': 1989},
              1990: {'name': 1990},
              1991: {'name': 1991},
              1992: {'name': 1992},
              1993: {'name': 1993},
              1994: {'name': 1994},
              1995: {'name': 1995},
              1996: {'name': 1996},
              1997: {'name': 1997},
              1998: {'name': 1998},
              1999: {'name': 1999},
              2000: {'name': 2000},
              2001: {'name': 2001},
              2002: {'name': 2002},
              2003: {'name': 2003},
              2004: {'name': 2004},
              2005: {'name': 2005},
              2006: {'name': 2006},
              2007: {'name': 2007},
              2008: {'name': 2008},
              2009: {'name': 2009},
              2010: {'name': 2010},
              2011: {'name': 2011},
              2012: {'name': 2012},
              2013: {'name': 2013},
              2014: {'name': 2014},
              2015: {'name': 2015},
              2016: {'name': 2016}
            }
          },
          ceiling_height: {
            name: constants('add_ceiling_height'),
            type: 'number',
            size: 'small',
            values: {
              value: ''
            }
          }
        }
      },
      building_type: {
        name: constants('add_building_type'),
        type: 'selector',
        values: {
          0: {
            name: '--',
            selected: true
          },
          1: {
            name: constants('add_building_type_brick')
          },
          2: {
            name: constants('add_building_type_monolithic')
          },
          3: {
            name: constants('add_building_type_panel')
          },
          4: {
            name: constants('add_building_type_modular')
          },
          5: {
            name: constants('add_building_type_wood')
          },
          6: {
            name: constants('add_building_type_monolith_brick')
          }
        }
      },
      garbage_chute: {
        name: constants('add_garbage_chute'),
        type: 'segments',
        values: {
          yes: {
            name: constants('yes')
          },
          no: {
            name: constants('no')
          }
        }
      },
      elevators: {
        type: 'section',
        layout: 'line',
        data: {
          passenger: {
            name: constants('add_passenger_elevators'),
            type: 'number',
            placeholder: 'count',
            size: 'small',
            values: {
              value: ''
            }
          },
          service: {
            name: constants('add_service_lifts'),
            type: 'number',
            placeholder: constants('count'),
            size: 'small',
            values: {
              value: ''
            }
          }
        }
      }
    }
  },
  house: {
    name: constants('add_house_info'),
    type: 'house',
    data: {
      cottage_name: {
        name: constants('add_name_cottage'),
        type: 'text',
        values: {
          value: ''
        }
      },
      building_type: {
        name: constants('add_building_type'),
        type: 'selector',
        values: {
          0: {
            name: '--',
            selected: true
          },
          1: {
            name: constants('add_building_type_brick')
          },
          2: {
            name: constants('add_building_type_monolithic')
          },
          3: {
            name: constants('add_building_type_panel')
          },
          4: {
            name: constants('add_building_type_modular')
          },
          5: {
            name: constants('add_building_type_wood')
          },
          6: {
            name: constants('add_building_type_monolith_brick')
          }
        }
      },
      ceiling_year: {
        type: 'section',
        layout: 'line',
        data: {
          year: {
            name: constants('add_construction_year'),
            type: 'selector',
            size: 'small',
            values: {
              1800: {'name': 1800},
              1801: {'name': 1801},
              1802: {'name': 1802},
              1803: {'name': 1803},
              1804: {'name': 1804},
              1805: {'name': 1805},
              1806: {'name': 1806},
              1807: {'name': 1807},
              1808: {'name': 1808},
              1809: {'name': 1809},
              1810: {'name': 1810},
              1811: {'name': 1811},
              1812: {'name': 1812},
              1813: {'name': 1813},
              1814: {'name': 1814},
              1815: {'name': 1815},
              1816: {'name': 1816},
              1817: {'name': 1817},
              1818: {'name': 1818},
              1819: {'name': 1819},
              1820: {'name': 1820},
              1821: {'name': 1821},
              1822: {'name': 1822},
              1823: {'name': 1823},
              1824: {'name': 1824},
              1825: {'name': 1825},
              1826: {'name': 1826},
              1827: {'name': 1827},
              1828: {'name': 1828},
              1829: {'name': 1829},
              1830: {'name': 1830},
              1831: {'name': 1831},
              1832: {'name': 1832},
              1833: {'name': 1833},
              1834: {'name': 1834},
              1835: {'name': 1835},
              1836: {'name': 1836},
              1837: {'name': 1837},
              1838: {'name': 1838},
              1839: {'name': 1839},
              1840: {'name': 1840},
              1841: {'name': 1841},
              1842: {'name': 1842},
              1843: {'name': 1843},
              1844: {'name': 1844},
              1845: {'name': 1845},
              1846: {'name': 1846},
              1847: {'name': 1847},
              1848: {'name': 1848},
              1849: {'name': 1849},
              1850: {'name': 1850},
              1851: {'name': 1851},
              1852: {'name': 1852},
              1853: {'name': 1853},
              1854: {'name': 1854},
              1855: {'name': 1855},
              1856: {'name': 1856},
              1857: {'name': 1857},
              1858: {'name': 1858},
              1859: {'name': 1859},
              1860: {'name': 1860},
              1861: {'name': 1861},
              1862: {'name': 1862},
              1863: {'name': 1863},
              1864: {'name': 1864},
              1865: {'name': 1865},
              1866: {'name': 1866},
              1867: {'name': 1867},
              1868: {'name': 1868},
              1869: {'name': 1869},
              1870: {'name': 1870},
              1871: {'name': 1871},
              1872: {'name': 1872},
              1873: {'name': 1873},
              1874: {'name': 1874},
              1875: {'name': 1875},
              1876: {'name': 1876},
              1877: {'name': 1877},
              1878: {'name': 1878},
              1879: {'name': 1879},
              1880: {'name': 1880},
              1881: {'name': 1881},
              1882: {'name': 1882},
              1883: {'name': 1883},
              1884: {'name': 1884},
              1885: {'name': 1885},
              1886: {'name': 1886},
              1887: {'name': 1887},
              1888: {'name': 1888},
              1889: {'name': 1889},
              1890: {'name': 1890},
              1891: {'name': 1891},
              1892: {'name': 1892},
              1893: {'name': 1893},
              1894: {'name': 1894},
              1895: {'name': 1895},
              1896: {'name': 1896},
              1897: {'name': 1897},
              1898: {'name': 1898},
              1899: {'name': 1899},
              1900: {'name': 1900},
              1901: {'name': 1901},
              1902: {'name': 1902},
              1903: {'name': 1903},
              1904: {'name': 1904},
              1905: {'name': 1905},
              1906: {'name': 1906},
              1907: {'name': 1907},
              1908: {'name': 1908},
              1909: {'name': 1909},
              1910: {'name': 1910},
              1911: {'name': 1911},
              1912: {'name': 1912},
              1913: {'name': 1913},
              1914: {'name': 1914},
              1915: {'name': 1915},
              1916: {'name': 1916},
              1917: {'name': 1917},
              1918: {'name': 1918},
              1919: {'name': 1919},
              1920: {'name': 1920},
              1921: {'name': 1921},
              1922: {'name': 1922},
              1923: {'name': 1923},
              1924: {'name': 1924},
              1925: {'name': 1925},
              1926: {'name': 1926},
              1927: {'name': 1927},
              1928: {'name': 1928},
              1929: {'name': 1929},
              1930: {'name': 1930},
              1931: {'name': 1931},
              1932: {'name': 1932},
              1933: {'name': 1933},
              1934: {'name': 1934},
              1935: {'name': 1935},
              1936: {'name': 1936},
              1937: {'name': 1937},
              1938: {'name': 1938},
              1939: {'name': 1939},
              1940: {'name': 1940},
              1941: {'name': 1941},
              1942: {'name': 1942},
              1943: {'name': 1943},
              1944: {'name': 1944},
              1945: {'name': 1945},
              1946: {'name': 1946},
              1947: {'name': 1947},
              1948: {'name': 1948},
              1949: {'name': 1949},
              1950: {'name': 1950},
              1951: {'name': 1951},
              1952: {'name': 1952},
              1953: {'name': 1953},
              1954: {'name': 1954},
              1955: {'name': 1955},
              1956: {'name': 1956},
              1957: {'name': 1957},
              1958: {'name': 1958},
              1959: {'name': 1959},
              1960: {'name': 1960},
              1961: {'name': 1961},
              1962: {'name': 1962},
              1963: {'name': 1963},
              1964: {'name': 1964},
              1965: {'name': 1965},
              1966: {'name': 1966},
              1967: {'name': 1967},
              1968: {'name': 1968},
              1969: {'name': 1969},
              1970: {'name': 1970},
              1971: {'name': 1971},
              1972: {'name': 1972},
              1973: {'name': 1973},
              1974: {'name': 1974},
              1975: {'name': 1975},
              1976: {'name': 1976},
              1977: {'name': 1977},
              1978: {'name': 1978},
              1979: {'name': 1979},
              1980: {'name': 1980},
              1981: {'name': 1981},
              1982: {'name': 1982},
              1983: {'name': 1983},
              1984: {'name': 1984},
              1985: {'name': 1985},
              1986: {'name': 1986},
              1987: {'name': 1987},
              1988: {'name': 1988},
              1989: {'name': 1989},
              1990: {'name': 1990},
              1991: {'name': 1991},
              1992: {'name': 1992},
              1993: {'name': 1993},
              1994: {'name': 1994},
              1995: {'name': 1995},
              1996: {'name': 1996},
              1997: {'name': 1997},
              1998: {'name': 1998},
              1999: {'name': 1999},
              2000: {'name': 2000},
              2001: {'name': 2001},
              2002: {'name': 2002},
              2003: {'name': 2003},
              2004: {'name': 2004},
              2005: {'name': 2005},
              2006: {'name': 2006},
              2007: {'name': 2007},
              2008: {'name': 2008},
              2009: {'name': 2009},
              2010: {'name': 2010},
              2011: {'name': 2011},
              2012: {'name': 2012},
              2013: {'name': 2013},
              2014: {'name': 2014},
              2015: {'name': 2015},
              2016: {'name': 2016}
            }
          },
          ceiling_height: {
            name: constants('add_ceiling_height'),
            type: 'number',
            size: 'small',
            values: {
              value: ''
            }
          }
        }
      },
      rooms: {
        name: constants('add_rooms'),
        type: 'segments',
        values: {
          1: {
            name: 1,
            selected: true
          },
          2: {
            name: 2
          },
          3: {
            name: 3
          },
          4: {
            name: 4
          },
          5: {
            name: 5
          },
          6: {
            name: 6
          },
          7: {
            name: 7
          },
          8: {
            name: 8
          },
          9: {
            name: 9
          },
          10: {
            name: constants('add_rooms_more')
          }
        }
      },
      area: {
        type: 'section',
        layout: 'line',
        data: {
          all: {
            name: constants('add_area'),
            placeholder: constants('sqm'),
            type: 'number',
            size: 'small',
            values: {
              value: ''
            }
          },
          living: {
            name: constants('add_living_area'),
            placeholder: constants('sqm'),
            type: 'number',
            size: 'small',
            values: {
              value: ''
            }
          },
          kitchen: {
            name: constants('add_kitchen_area'),
            placeholder: constants('sqm'),
            type: 'number',
            size: 'small',
            values: {
              value: ''
            }
          }
        }
      },
      rooms_area: {
        name: constants('add_rooms_area'),
        placeholder: constants('sqm'),
        type: 'text',
        values: {
          value: ''
        }
      },
      toilets: {
        type: 'section',
        layout: 'line',
        data: {
          separate: {
            name: constants('add_separate_toilets'),
            placeholder: constants('count'),
            size: 'small',
            type: 'number',
            values: {
              value: ''
            }
          },
          combined: {
            name: constants('add_combined_bathroom'),
            placeholder: constants('count'),
            size: 'small',
            type: 'number',
            values: {
              value: ''
            }
          }
        }
      },
      heating: {
        name: constants('add_heating'),
        type: 'selector',
        values: {
          0: {
            name: '--',
            selected: true
          },
          1: {
            name: constants('add_heating_central_gas')
          },
          2: {
            name: constants('add_heating_central_coal')
          },
          3: {
            name: constants('add_heating_bake')
          },
          4: {
            name: constants('add_heating_fireplace')
          },
          5: {
            name: constants('add_heating_without')
          }
        }
      },
      lavatory_warming_electricity: {
        type: 'section',
        layout: 'line',
        data: {
          lavatory: {
            name: constants('add_lavatory'),
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
          warming: {
            name: constants('add_warming'),
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
          electricity: {
            name: constants('add_electricity'),
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
      sewerage_water_gas: {
        type: 'section',
        layout: 'line',
        data: {
          sewerage: {
            name: constants('add_sewerage'),
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
          water_supply: {
            name: constants('add_water_supply'),
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
          gas: {
            name: constants('add_gas'),
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
      security_bathhouse_garage: {
        type: 'section',
        layout: 'line',
        data: {
          security: {
            name: constants('add_security'),
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
          bathhouse: {
            name: constants('add_bathhouse'),
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
          garage: {
            name: constants('add_garage'),
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
      pool_outbuildings: {
        type: 'section',
        layout: 'line',
        data: {
          pool: {
            name: constants('add_pool'),
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
          outbuildings: {
            name: constants('add_outbuildings'),
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
  homestead_info: {
    name: constants('add_homestead'),
    type: 'house',
    data: {
      area: {
        type: 'section',
        layout: 'line',
        data: {
          amount: {
            name: constants('area'),
            type: 'number',
            size: 'small',
            values: {
              value: ''
            }
          },
          units: {
            name: constants('add_units'),
            type: 'selector',
            size: 'small',
            values: {
              0: {
                name: constants('add_units_m'),
                selected: true
              },
              2: {
                name: constants('add_units_km')
              },
              3: {
                name: constants('add_units_ha')
              },
              4: {
                name: constants('add_units_a')
              },
              5: {
                name: constants('add_units_acre')
              }
            }
          }
        }
      },
      status: {
        name: constants('add_status'),
        type: 'text',
        values: {
          value: ''
        }
      }
    }
  },
  furniture: {
    name: constants('add_furniture'),
    type: 'common',
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
    type: 'common',
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
    type: 'common',
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
  photos: {
    name: constants('add_photo'),
    type: 'common',
    data: {
      list: {
        name: '',
        type: 'extendable_list',
        placeholder: constants('add_photo_placeholder'),
        limit: 20,
        values: []
      }
    }
  },
  additional: {
    name: constants('add_additional'),
    type: 'common',
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
    type: 'common',
    data: {
      name: {
        name: constants('add_contacts_name'),
        type: 'text',
        values: {
          value: ''
        }
      },
      phone: {
        name: constants('add_phone'),
        type: 'text',
        values: {
          value: ''
        }
      },
      url: {
        name: constants('add_contacts_url'),
        type: 'text',
        placeholder: constants('add_photo_placeholder'),
        values: {
          value: ''
        }
      },
      list: {
        name: constants('add_contacts_more'),
        type: 'extendable_list',
        placeholder: constants('add_contacts_placeholder'),
        limit: 10,
        values: []
      }
    }
  }
};
