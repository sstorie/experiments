using System;
using System.Collections.Generic;
using System.Linq;
using System.Reactive.Linq;
using System.Text;
using System.Threading.Tasks;
using ReactiveUI;

namespace SimpleApp
{
    public class MainWindowViewModel : ReactiveObject
    {
        readonly ObservableAsPropertyHelper<long> _currentValue;
        public long CurrentValue => _currentValue.Value;

        public MainWindowViewModel()
        {

            Observable.Interval(TimeSpan.FromSeconds(1))
                .ToProperty(this, x => x.CurrentValue, out _currentValue, 0, false, RxApp.MainThreadScheduler);
        }
    }
}
