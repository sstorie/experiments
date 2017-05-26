using System;
using System.Reactive.Linq;
using ReactiveUI;

namespace SimpleApp.ViewModels
{
    public class MainWindowViewModel : ReactiveObject
    {
        readonly ObservableAsPropertyHelper<long> _currentValue;
        public long CurrentValue => _currentValue.Value;

        public CounterViewModel CounterViewModel { get; }

        public MainWindowViewModel(CounterViewModel counterViewModel)
        {
            Observable.Interval(TimeSpan.FromSeconds(1))
                .ToProperty(this, x => x.CurrentValue, out _currentValue, 0, false, RxApp.MainThreadScheduler);

            CounterViewModel = counterViewModel;
        }
    }
}
