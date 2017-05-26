using System.Windows;
using ReactiveUI;
using SimpleApp.ViewModels;

namespace SimpleApp.Views
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window, IViewFor<MainWindowViewModel>
    {
        public static readonly DependencyProperty ViewModelProperty =
            DependencyProperty.Register(
                "ViewModel", 
                typeof(MainWindowViewModel), 
                typeof(MainWindow));

        public MainWindow(MainWindowViewModel viewModel)
        {
            ViewModel = viewModel;
            InitializeComponent();
            DataContext = ViewModel;

            this.WhenActivated(d =>
            {
                d(this.OneWayBind(ViewModel, vm => vm.CurrentValue, v => v.CurrentValue.Text));
                d(this.OneWayBind(ViewModel, vm => vm.CounterViewModel, v => v.CounterViewModel.ViewModel));
            });
        }

        object IViewFor.ViewModel
        {
            get => ViewModel;
            set => ViewModel = (MainWindowViewModel)value;
        }

        public MainWindowViewModel ViewModel { get; set; }
    }
}
