 positioner: function (labelWidth, labelHeight, point) {
      const chartWidth = this.chart.chartWidth;
      const chartHeight = this.chart.chartHeight;
      const plotTop = this.chart.plotTop;
      const plotLeft = this.chart.plotLeft;
      const plotHeight = this.chart.plotHeight;

      // Calculate default positions
      let tooltipX = point.plotX + plotLeft - labelWidth / 2;
      let tooltipY = point.plotY + plotTop - labelHeight - 10;

      // Check if there's enough space above the point
      if (tooltipY < plotTop) {
        // Position below the point if no space above
        tooltipY = point.plotY + plotTop + 10;
      }

      // Prevent tooltip from overlapping the series at the top
      if (tooltipY < plotTop + 10) {
        tooltipY = point.plotY + plotTop + 10;
      }

      // Prevent tooltip from going outside the right boundary
      if (tooltipX + labelWidth > chartWidth) {
        tooltipX = chartWidth - labelWidth - 10;
      }

      // Prevent tooltip from going outside the left boundary
      if (tooltipX < 0) {
        tooltipX = 10;
      }

      // Prevent tooltip from going outside the bottom boundary
      if (tooltipY + labelHeight > chartHeight) {
        tooltipY = chartHeight - labelHeight - 10;
      }

      return {
        x: tooltipX,
        y: tooltipY,
      };
    },
