// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import CustomerStats from '@components/card-statistics/CustomerStats'

const CustomerStatisticsCard = ({ customerStatData }) => {
  return (
    <Grid container spacing={6}>
      {customerStatData?.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <CustomerStats {...item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default CustomerStatisticsCard