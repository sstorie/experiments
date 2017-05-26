using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using ReactiveUI;
using SimpleApp.ViewModels;

namespace SimpleApp.Views
{
    /// <summary>
    /// Interaction logic for Counter.xaml
    /// </summary>
    public partial class Counter : IViewFor<CounterViewModel>
    {
        public static readonly DependencyProperty ViewModelProperty =
            DependencyProperty.Register(
                "ViewModel",
                typeof(CounterViewModel),
                typeof(Counter));

        public Counter()
        {
            InitializeComponent();

            this.WhenActivated(d =>
            {
                d(this.OneWayBind(ViewModel, vm => vm.CurrentValue, v => v.CurrentValue.Text));
            });

        }

        object IViewFor.ViewModel
        {
            get => ViewModel;
            set => ViewModel = (CounterViewModel) value;
        }

        public CounterViewModel ViewModel { get; set; }
    }
}
