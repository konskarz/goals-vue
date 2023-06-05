<script setup>
const options = {
  chart: {
    height: 350,
    type: 'heatmap'
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#008FFB'],
  title: {
    text: 'HeatMap Chart (Single color)'
  }
}
const series = [
  {
    name: 'Metric1',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric2',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric3',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric4',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric5',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric6',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric7',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric8',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric9',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  }
]

function generateData(count, yrange) {
  var i = 0
  var series = []
  while (i < count) {
    var x = 'w' + (i + 1).toString()
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

    series.push({
      x: x,
      y: y
    })
    i++
  }
  return series
}
</script>

<template>
  <q-page>
    <q-toolbar class="q-mt-md q-pl-lg">
      <q-toolbar-title>Reports</q-toolbar-title>
    </q-toolbar>
    <div class="q-px-md">
      <apexchart type="heatmap" height="350" :options="options" :series="series" />
    </div>
  </q-page>
</template>
