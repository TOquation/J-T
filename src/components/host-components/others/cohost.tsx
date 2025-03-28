import { cn } from '@/lib/utils';

export type CoHost = {
  name: string;
  action: string;
  permissions: number;
  status: 'online' | 'offline';
};

type CoHostCardProps = {
  className?: string;
  coHosts: CoHost[];
};

export const CoHostCard = ({ className, coHosts }: CoHostCardProps) => {
  return (
    <div
      className={cn(
        'flex h-full flex-col rounded-lg bg-white shadow-sm',
        className
      )}
    >
      {/* Fixed Header */}
      <div className="sticky top-0 z-10 rounded-tl-lg rounded-tr-lg bg-white p-4 pb-0">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">Co Host</h2>
          <div className="flex space-x-1">
            <span className="h-1.5 w-1.5 rounded-full bg-gray-600"></span>
            <span className="h-1.5 w-1.5 rounded-full bg-gray-600"></span>
            <span className="h-1.5 w-1.5 rounded-full bg-gray-600"></span>
          </div>
        </div>
      </div>

      {/* Scrollable Co-Host List */}
      <div
        className={cn(
          'max-h-80 flex-1 overflow-y-auto scroll-smooth p-4 pb-0 pt-0',
          'scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent'
        )}
      >
        <div className="flex min-h-full flex-col justify-end gap-4">
          {' '}
          {/* Added justify-end and min-h-full */}
          {coHosts.map((host, index) => (
            <div key={index} className="flex items-center space-x-3">
              {/* Avatar Placeholder */}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                <span className="text-sm text-gray-500">Img</span>
              </div>

              {/* Host Info */}
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">{host.name}</p>
                <p className="text-xs text-gray-500">{host.action}</p>
              </div>

              {/* Permissions and Status */}
              <div className="flex items-center space-x-2">
                <span className="text-xs text-blue-500">
                  {host.permissions} permission
                </span>
                <span
                  className={cn(
                    'h-3 w-3 rounded-full',
                    host.status === 'online' ? 'bg-green-500' : 'bg-gray-300'
                  )}
                />
                <span
                  className={cn(
                    'text-xs',
                    host.status === 'online'
                      ? 'text-green-500'
                      : 'text-gray-400'
                  )}
                >
                  {host.status === 'online' ? 'Online' : 'Offline'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
