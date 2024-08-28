 positioner: function (labelWidth, labelHeight, point) {
      const chartWidth = this.chart.chartWidth;
      let tooltipX, tooltipY;

      tooltipX = point.plotX + this.chart.plotLeft + 10;
      tooltipY = point.plotY + this.chart.plotTop - 10;

      // Adjust if tooltip goes beyond the right boundary
      if (tooltipX + labelWidth > chartWidth) {
        tooltipX -= (tooltipX + labelWidth) - chartWidth + 10;
      }

      // Prevent tooltip from going outside the left boundary
      if (tooltipX < 0) {
        tooltipX = 10;
      }

      return {
        x: tooltipX,
        y: tooltipY,
      };
    },
