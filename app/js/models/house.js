'use strict';

import constants from 'modules/constants';

export default {
  info: {
    name: constants('add_house_info'),
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
