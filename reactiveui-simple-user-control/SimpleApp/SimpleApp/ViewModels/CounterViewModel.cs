using System;
using System.Collections.Generic;
using System.Linq;
using System.Reactive.Linq;
using System.Text;
using System.Threading.Tasks;
using ReactiveUI;

namespace SimpleApp.ViewModels
{
    public class CounterViewModel : ReactiveObject
    {
        readonly ObservableAsPropertyHelper<long> _currentValue;
        public long CurrentValue => _currentValue.Value;

        public CounterViewModel()
        {
            Observable.Interval(TimeSpan.FromSeconds(1))
                .Select(x => x * 2)
                .ToProperty(this, x => x.CurrentValue, out _currentValue, 0, false, RxApp.MainThreadScheduler);

        }
    }
}
