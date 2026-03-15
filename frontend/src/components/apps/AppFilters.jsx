import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

const ratingOptions = [
  { label: 'All ratings', value: '' },
  { label: '4 stars & above', value: '4' },
  { label: '3 stars & above', value: '3' },
  { label: '2 stars & above', value: '2' },
];

function AppFilters({ categories, filters, onChange, onApply }) {
  return (
    <Card sx={{ borderRadius: 2, bgcolor: 'rgba(255,255,255,0.78)' }}>
      <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
        <Stack component="form" onSubmit={onApply} spacing={2.5}>
          <Stack spacing={0.5}>
            <Typography variant="h5">Find applications</Typography>
            <Typography color="text.secondary">
              Search by name, narrow by category, and refine results using rating filters.
            </Typography>
          </Stack>

          <Grid container spacing={2.25} alignItems="stretch">
            <Grid item xs={12} lg={4}>
              <TextField
                label="Search by app name"
                value={filters.search}
                onChange={(event) => onChange('search', event.target.value)}
                placeholder="Try WhatsApp, PUBG Mobile, or FitBloom"
                sx={{
                  '& .MuiInputBase-root': {
                    minHeight: 62,
                    borderRadius: 1.5,
                    bgcolor: '#FFFFFF',
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <FormControl fullWidth>
                <InputLabel id="category-filter-label" shrink>
                  Category
                </InputLabel>
                <Select
                  labelId="category-filter-label"
                  value={filters.category}
                  label="Category"
                  onChange={(event) => onChange('category', event.target.value)}
                  displayEmpty
                  notched
                  renderValue={(value) => value || 'All categories'}
                  sx={{
                    minHeight: 62,
                    borderRadius: 1.5,
                    bgcolor: '#FFFFFF',
                    '& .MuiSelect-select': {
                      display: 'flex',
                      alignItems: 'center',
                      minHeight: 'unset',
                      py: 2,
                      whiteSpace: 'nowrap',
                    },
                  }}
                >
                  <MenuItem value="">All categories</MenuItem>
                  {categories.map((category) => (
                    <MenuItem key={category.id} value={category.slug}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <FormControl fullWidth>
                <InputLabel id="rating-filter-label" shrink>
                  Minimum rating
                </InputLabel>
                <Select
                  labelId="rating-filter-label"
                  value={filters.rating}
                  label="Minimum rating"
                  onChange={(event) => onChange('rating', event.target.value)}
                  displayEmpty
                  notched
                  renderValue={(value) => {
                    const selected = ratingOptions.find((option) => option.value === value);
                    return selected ? selected.label : 'All ratings';
                  }}
                  sx={{
                    minHeight: 62,
                    borderRadius: 1.5,
                    bgcolor: '#FFFFFF',
                    '& .MuiSelect-select': {
                      display: 'flex',
                      alignItems: 'center',
                      minHeight: 'unset',
                      py: 2,
                      whiteSpace: 'nowrap',
                    },
                  }}
                >
                  {ratingOptions.map((option) => (
                    <MenuItem key={option.label} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
            <Button type="submit" variant="contained" color="primary">
              Apply Filters
            </Button>
            <Button onClick={() => onChange('reset')} variant="outlined">
              Reset
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default AppFilters;
