import React, {FC} from 'react'
import {
  ChartsWidget3,
  TablesWidget13,

} from '../../../../_metronic/partials/widgets'

const Tables: FC = () => {
  return (
    <>

<div className='row g-5 g-xl-8'>
        <div className='col-xl-6'>
          <ChartsWidget3 className='card-xl-stretch mb-xl-8' />
        </div>
        
      </div>

      <TablesWidget13 className='mb-5 mb-xl-8' />


    </>
  )
}

export {Tables}
