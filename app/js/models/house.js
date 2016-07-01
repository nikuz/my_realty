'use strict';

import constants from 'modules/constants';

export default [
  {
    name: constants('add_house_info'),
    data: [
      {
        type: 'section',
        data: [
          {
            name: constants('add_name_cottage'),
            type: 'text',
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
          }
        ]
      },
      {
        type: 'section',
        layout: 'line',
        data: [
          {
            name: constants('add_construction_year'),
            type: 'year',
            values: {
              value: ''
            }
          },
          {
            name: constants('add_ceiling_height'),
            type: 'number',
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
      {
        type: 'section',
        layout: 'line',
        data: [
          {
            name: constants('add_area'),
            placeholder: constants('sqm'),
            type: 'number',
            size: 'small',
            values: {
              value: ''
            }
          },
          {
            name: constants('add_living_area'),
            placeholder: constants('sqm'),
            type: 'number',
            size: 'small',
            values: {
              value: ''
            }
          },
          {
            name: constants('add_kitchen_area'),
            placeholder: constants('sqm'),
            type: 'number',
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
            name: constants('add_rooms_area'),
            placeholder: constants('sqm'),
            type: 'text',
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
            name: constants('add_separate_toilets'),
            placeholder: constants('count'),
            size: 'small',
            type: 'number',
            values: {
              value: ''
            }
          },
          {
            name: constants('add_combined_bathroom'),
            placeholder: constants('count'),
            size: 'small',
            type: 'number',
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
          }
        ]
      },
      {
        type: 'section',
        layout: 'line',
        data: [
          {
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
          {
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
          {
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
        ]
      },
      {
        type: 'section',
        layout: 'line',
        data: [
          {
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
          {
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
          {
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
        ]
      },
      {
        type: 'section',
        layout: 'line',
        data: [
          {
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
          {
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
          {
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
        ]
      },
      {
        type: 'section',
        layout: 'line',
        data: [
          {
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
          {
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
        ]
      }
    ]
  },
  {
    name: constants('add_homestead'),
    data: [
      {
        type: 'section',
        layout: 'line',
        data: [
          {
            name: constants('area'),
            type: 'number',
            size: 'small',
            values: {
              value: ''
            }
          },
          {
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
        ]
      },
      {
        type: 'section',
        data: [
          {
            name: constants('add_status'),
            type: 'text',
            values: {
              value: ''
            }
          }
        ]
      }
    ]
  },
  {
    type: 'common',
    name: 'furniture'
  },
  {
    type: 'common',
    name: 'transaction'
  },
  {
    type: 'common',
    name: 'transport'
  },
  {
    type: 'common',
    name: 'social'
  },
  {
    type: 'common',
    name: 'photos'
  },
  {
    type: 'common',
    name: 'additional'
  },
  {
    type: 'common',
    name: 'contacts'
  }
];
