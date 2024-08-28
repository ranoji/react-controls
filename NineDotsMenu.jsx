positioner: function (labelWidth, labelHeight, point) {
      const chartWidth = this.chart.chartWidth;
      const chartHeight = this.chart.chartHeight;
      let tooltipX = point.plotX + this.chart.plotLeft - labelWidth / 2;
      let tooltipY = point.plotY + this.chart.plotTop - labelHeight - 10;

      // Default position is above the point
      if (tooltipY < 0) {
        // If there's not enough space above, position it below the point
        tooltipY = point.plotY + this.chart.plotTop + 10;
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
