'use strict';

import constants from 'modules/constants';

export default {
  info: {
    name: constants('add_apartment_info'),
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
    data: {
      ceiling_year: {
        type: 'section',
        layout: 'line',
        data: {
          year: {
            name: constants('add_construction_year'),
            type: 'year',
            values: {
              value: ''
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
  furniture: {
    type: 'common'
  },
  transport: {
    type: 'common'
  },
  social: {
    type: 'common'
  },
  photos: {
    type: 'common'
  },
  additional: {
    type: 'common'
  },
  contacts: {
    type: 'common'
  }
};
